# Exercise: API Endpoints Solution

- Get all the posts
  - `GET /posts`
- Create a new post
  - `POST /posts`
- Edit a post
  - `PUT /posts/:postId`
  - `PATCH /posts/:postId`
- Create a new user
  - `POST /users`
- Get the comments for a post
  - `GET /posts/:postId/comments`
- Create a comment for a post
  - `POST /posts/:postId/comments`

{
  commentId:1,
  commentText: 'Hello',
  postId: 1
}
- Edit a comment for a post
  - `PUT /comments/:commentId`
  - `PATCH /comments/:commentId`
- Delete a comment for a post
  - `DELETE /comments/:commentId`
- Add a like for a post
Sessions
{
  userId: 1,
  sessionToken: abcdefg
}
  - `POST /posts/:postId/like`

  {
    likeId: 1,
    postId: 5,
    userId: 1
  }
- Remove a like for a post
  - `DELETE /posts/:postId/like`
  sessionToken: abcdefg
- Get all the posts of a user
  - `GET /users/:userId/posts`
- Submit a search on posts
  - `GET /posts/search`
  - `POST /posts/search`
