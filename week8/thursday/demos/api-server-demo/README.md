# API Server Demo
APIs are interfaces that abstract away the inner workings of complex packages of code so that a developer can worry only about the input and output.

One of the most common uses of a Web API is to store, share, and update data. The programmer doesn't need to worry about how any of that works, they just need to read the documentation for the API to learn how to access what they want.

Go over (json placeholder)[https://jsonplaceholder.typicode.com/guide/] endpoints.

Show how fetch is using that data in the demo site, I can create any frontend I want with that data. Walkthrough the JS file.

Notice how we are using javascript/json for the body of the request and response. It is a string that looks like JS so that it can be easily transformed into JS or JSON.

```js
JSON.stringify(value);
JSON.parse(str); // res.json() if using the fetch api
```
It is just a format, you can even create files with that extension. (Show it)

Now we have learned about traditional servers that serve html and web apis that serve just data (typically json). Let's compare their endpoints.

Go over traditional-vs-web.md