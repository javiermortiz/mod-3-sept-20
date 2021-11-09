# Exercise: HTML Web Server RESTful Endpoints Solution

- Access the home page
  - `GET /`
  - `GET /home`
- Submit a contact form
  - `POST /contacts`
- Access the posts page
  - `GET /posts`

Cycle to edit a post
- Access the edit page for a post
  - `GET /posts/:postId/edit`
- Edit a post
  - `POST /posts/:postId`


Cycle to create a new user  
- Access the create page for a post
  - `GET /users/new`
- Create a new user
  - `POST /users`





- Log In
  - `POST /users/login`
  - `POST /login`
  - `POST /session`
- Log Out
  - `POST /users/logout`
  - `POST /logout`
  - `POST /session/delete`
- Access the comments for a post page
  - `GET /posts/:postId/comments`
- Access the create page for a post's comment
  - `GET /posts/:postId/comments/new`
- Access the edit page for a comment
  - `GET /comments/:commentId/edit`
- Submit a like for a post
  - `POST /posts/:postId/like`
- Delete a like for a post
  - `POST /posts/:postId/like/:likeId/delete`
- Access all the posts of a user
  - `GET /users/:userId/posts`
- Submit a search on posts
  - `POST /posts/search`
