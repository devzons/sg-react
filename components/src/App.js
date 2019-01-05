import React from 'react'
import CommentDetail from './CommentDetail'

const App = () => {
  return(
    <div className="ui container comments">
      <CommentDetail author="Steve" />
      <CommentDetail author="Silva" />
      <CommentDetail author="John" />
      <CommentDetail author="Jane" />
      <CommentDetail author="Don" />
    </div>
  )
}

export default App