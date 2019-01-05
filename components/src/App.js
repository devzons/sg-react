import React from 'react'
import CommentDetail from './CommentDetail'
import Faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return(
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Steve" 
          timeAgo="Today at 4:45PM" 
          content="Nice blog post!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Silva" 
          timeAgo="Today at 2:45PM" 
          content="Thumbs up!" 
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="John" 
          timeAgo="Today at 3:30PM" 
          content="Wow, it is something" 
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Today at 1:45PM" 
          content="Cool content!!" 
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Don" 
          timeAgo="Today at 10:20AM" 
          content="Nice little touch" 
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      
    </div>
  )
}

export default App