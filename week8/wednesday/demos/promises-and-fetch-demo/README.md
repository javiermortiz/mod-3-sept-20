# Promises and fetch demo
## Synchronous vs Asynchrnous code
In its most basic form, JavaScript is a synchronous, blocking, single-threaded language, in which only one operation can be in progress at a time. But web browsers define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs (the passage of time, the user's interaction with the mouse, or the arrival of data over the network, for example). This means that you can let your code do several things at the same time without stopping or blocking your main thread.

Whether we want to run code synchronously or asynchronously will depend on what we're trying to do.

There are times when we want things to load and happen right away. For example when applying some user-defined styles to a webpage you'll want the styles to be applied as soon as possible.

If we're running an operation that takes time however, like querying a database and using the results to populate templates, it is better to push this off the stack and complete the task asynchronously. Over time, you'll learn when it makes more sense to choose an asynchronous technique over a synchronous one.

- Load some user styles based on their preference (show dark mode and light mode and how local storage is saving it)
- do a fetch, stress that we want to run some code just when the data arrives, we want to run it asynchronously
```js
  const res = fetch("/products")
  console.log(res);
```

## Promises
- promises allow us to run code that relies on the fullfilment of some asynchronous code, it allows us to wait for it.
- A promise is some asynchronous code that has the .then method to wait for the completion of the code before running a callback
- Some functions return promises by design, like fetch
```js
fetch("/products")
  .then(res => res.text())
  .then(txt => console.log(txt));
```

- Callbacks added with then() will never be invoked before the completion of the original asynchronous function (fetch)
- Multiple callbacks may be added by calling then() several times. They will be invoked one after another, in the order in which they were inserted.

## Async and Await
More recent additions to the JavaScript language are async functions and the await keyword, added in ECMAScript 2017. These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code

First of all we have the async keyword, which you put in front of a function declaration to turn it into an async function. An async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.

await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

```js
(async function() {
    const res = await fetch("/products");
    const txt = await res.text();
    console.log(txt);
})();
```

## Fetch
Fetch provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

It is another way besides the url bar and html forms, to generate http requests

```js
fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(res => {
  console.log({
    status: res.status, // 200
    location: res.headers.get('Location'), // undefined
    redirected: res.redirected, // true
    url: res.url // /products/2
  });
});
```

## Creating your own promises
A Promise can be created from scratch using its constructor. This should be needed only to wrap old asynchronous code.

In an ideal world, all asynchronous functions would already return promises.The most obvious example is the setTimeout() function:

```js
setTimeout(() => console.log("5 seconds passed"), 5*1000);
```

For all the code that we want it to wait for the specified time, we would have to write it inside the setTimeout callback. Instead, we can wrap it in a promise and use .then to wait for it

```js
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, ms);
    });
}

wait(5*1000).then(() => console.log("5 seconds"))
```