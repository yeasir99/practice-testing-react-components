import React from 'react'
import { savePost } from './api'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

function Editor({ user }) {
  const [state, setState] = React.useState(false)
  const [redirect, setRedirect] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const { title, content, tags } = e.target.elements

    setState(true)
    savePost({
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
      userId: user.userId,
    }).then(
      () => setRedirect(true),
      response => {
        setError(response.data.error)
        setState(false)
      },
    )
  }

  if (redirect) {
    return <Redirect to="/" />
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
      {error ? <div role="alert">{error}</div> : null}
    </form>
  )
}

Editor.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
  }),
}
export default Editor
