import React from 'react'
import { savePost } from './api'
import PropTypes from 'prop-types'

function Editor({ user }) {
  const [state, setState] = React.useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const { title, content, tags } = e.target.elements

    setState(true)
    savePost({
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
      userId: user.userId,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-title">Title</label>
      <input id="input-title" name="title" />
      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" />
      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" name="tags" />
      <button type="submit" disabled={state}>
        Submit
      </button>
    </form>
  )
}

Editor.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
  }),
}
export default Editor
