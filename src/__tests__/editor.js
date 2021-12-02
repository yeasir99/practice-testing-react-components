import { render, screen, fireEvent } from '@testing-library/react'
import Editor from '../components/Editor'
import { savePost as mockSavePost } from './../components/api'

jest.mock('./../components/api')

test('render a form with a title, content, tags, and a submit button', () => {
  mockSavePost.mockResolvedValueOnce()
  render(<Editor />)
  screen.getByLabelText(/title/i).value = 'haskell'

  screen.getByLabelText(/Content/i).value = 'its interesting'

  screen.getByLabelText(/tags/i).value = 'elm, purescript'
  const submitBtn = screen.getByText(/submit/i)

  fireEvent.click(submitBtn)
  expect(submitBtn).toBeDisabled()

  expect(mockSavePost).toHaveBeenCalledWith({
    title: 'haskell',
    content: 'its interesting',
    tags: ['elm', 'purescript'],
  })
  expect(mockSavePost).toHaveBeenCalledTimes(1)
})
