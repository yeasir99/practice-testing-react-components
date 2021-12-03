import { render, screen, fireEvent } from '@testing-library/react'
import Editor from '../components/Editor'
import { savePost as mockSavePost } from './../components/api'

jest.mock('./../components/api')

afterEach(() => {
  jest.clearAllMocks()
})

test('render a form with a title, content, tags, and a submit button', () => {
  mockSavePost.mockResolvedValueOnce()

  const fakeUser = { userId: 'user-1' }

  render(<Editor user={fakeUser} />)

  const fakePost = {
    title: 'haskell',
    content: 'its interesting',
    tags: ['elm', 'purescript'],
  }

  screen.getByLabelText(/title/i).value = fakePost.title

  screen.getByLabelText(/content/i).value = fakePost.content

  screen.getByLabelText(/tags/i).value = fakePost.tags.join(',')
  const submitBtn = screen.getByText(/submit/i)

  fireEvent.click(submitBtn)
  expect(submitBtn).toBeDisabled()

  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    ...fakeUser,
  })
  expect(mockSavePost).toHaveBeenCalledTimes(1)
})
