import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { build, fake, sequence } from '@jackfranklin/test-data-bot'
import Editor from '../components/Editor'
import { Redirect as MockRedirect } from 'react-router-dom'
import { savePost as mockSavePost } from './../components/api'

jest.mock('react-router-dom', () => ({
  Redirect: jest.fn(() => null),
}))

jest.mock('./../components/api')

afterEach(() => {
  jest.clearAllMocks()
})

const userBuild = build('User', {
  fields: {
    userId: sequence(s => `user-${s}`),
  },
})

const postBuilder = build('Post', {
  fields: {
    title: fake(f => f.lorem.words()),
    content: fake(f => f.lorem.paragraph()),
    tags: fake(f => [f.lorem.words(), f.lorem.words(), f.lorem.words()]),
  },
})

const renderAndFillForm = () => {
  const fakeUser = userBuild()

  render(<Editor user={fakeUser} />)

  const fakePost = postBuilder()

  screen.getByLabelText(/title/i).value = fakePost.title
  screen.getByLabelText(/content/i).value = fakePost.content
  screen.getByLabelText(/tags/i).value = fakePost.tags.join(',')
  return {
    fakeUser,
    fakePost,
  }
}

test('render a form with a title, content, tags, and a submit button', async () => {
  mockSavePost.mockResolvedValueOnce()
  const { fakePost, fakeUser } = renderAndFillForm()

  const submitBtn = screen.getByText(/submit/i)

  fireEvent.click(submitBtn)
  expect(submitBtn).toBeDisabled()

  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    ...fakeUser,
  })
  expect(mockSavePost).toHaveBeenCalledTimes(1)
  await waitFor(() =>
    expect(MockRedirect).toHaveBeenCalledWith({ to: '/' }, {}),
  )
})

test('render an error message from server', async () => {
  mockSavePost.mockRejectedValueOnce({ data: { error: 'test error' } })
  renderAndFillForm()

  const submitBtn = screen.getByText(/submit/i)

  fireEvent.click(submitBtn)
  expect(submitBtn).toBeDisabled()

  const postError = await screen.findByRole('alert')

  expect(postError).toHaveTextContent('test error')

  expect(submitBtn).not.toBeDisabled()
})
