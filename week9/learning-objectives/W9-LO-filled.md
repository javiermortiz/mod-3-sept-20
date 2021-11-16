# W9D1

### Browser Basics Objectives

Below is a complete list of the browser basics objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.
 1. Run JavaScript on the browser by importing scripts into HTML files
  - In order to run our Javascript, we must import the file by using the script tag in our HTML.
    - In our script tag, we will specify the `type`, which is `module` and the `src`, which will have the relative path to your server.
    - *IMPORTANT*, it's best to have your script tag be the last line within your body tag. Because HTML runs top-down, we have to consider that our JS files could be heavy with content. If it's heavy on content, then your browser could take awhile to load. Remember, the script needs to run first, then everything inside your `<body>` tag will run, which is why we want to place the script tag all the way at the end. Putting it at the end will allow our HTML tags to load and render, then we deal with the javascript.
  ```
   This is our file structure

    - server.js
    |
    - assets /
        |
         index.html
        |
         js /
          |
           some-js-code.js

  ```

  To import your `some-js-code.js` script into `index.html`

  ``` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Something Random</title>
    </head>
    <body>
      <!-- some HTML here -->
      <!-- our script tag, which will be the last thing we run -->
      <script type="module" src="./assets/js/some-js-code.js"></script>
    </body>
    </html>

  ```

 2. Import JavaScript from one file into another
  - When dealing with the Browser, we will always need to use ES6 Modules to import/export our javascript files.

  - Some keywords when importing/exporting, assume that all the files are on the same level:
    - `export default`: statement to export one item per file, this is also a statement to export an unnamed item and rename the item in the import statement
      ``` javascript
        // hello.js, where we will export the function
        export default function hello(){
          console.log("hello")
        }
      ```

      ``` javascript
        // main.js, where we will import the function
        import helloFunction from "./hello.js";
      ```
    - `export` keyword to export multiple items per file
      ``` javascript
        // hello.js, where we will export the functions
        export function hello(){
          console.log("hello")
        }

        export function greeting(name){
          console.log(`Greetings ${name}`)
        }
      ```

      ``` javascript
        // main.js, where we will import the functions
        import { hello, greeting } from "./hello.js";
      ```

    - `as` keyword (in an `import ... from` statement) to alias and namespace all of a file's exported items
      ``` javascript
        // hello.js, where we will export the functions
        export function hello(){
          console.log("hello")
        }

        export function greeting(name){
          console.log(`Greetings ${name}`)
        }
      ```

      ``` javascript
        // main.js, where we will import the functions
        import { hello as helloFunction, greeting } from "./hello.js";

        helloFunction();
      ```

    - use `export default` and `export` in one file and import them in another.
      ``` javascript
        // hello.js, where we will export the functions
        export default function hello(){
          console.log("hello")
        }

        export function greeting(name){
          console.log(`Greetings ${name}`)
        }
      ```

      ``` javascript
        // main.js, where we will import the functions
        import helloFunction, { greeting } from "./hello.js";

        helloFunction();
      ```


 3. Compare and contrast running Javascript in Node in a console vs. the runtime environment on the browser
  - When we are running Javascript in Node, it's important to note that Node is a JS runtime environment. Javascript is a programming language we use to write scripts for our browser, so Node was created to allow us to run js outside of the browser.

  - When dealing with javascript through the browser, the js will be used on the client-side, or our frontend development. In Node, it will mostly be run through our server-side - which is how we build our backend server. Backend frameworks like Express uses javascript to build the server.

  - Export/Imports:
    - When using javascript on the browser, we will use `import...from` statements to handle our imports and `export` or `export default` to handle the export. Refer to LO # 2 for import/export examples.

    - When running javascript in Node, we will use `module.exports` to export, and `const variable = require('filepath')` to import.
      examples:
      ``` javascript
      // hello.js
      function hello(){
        console.log("hello")
      }

      module.exports = {hello}
      ```

      ``` javascript
      // main.js
      const {hello} = require('./hello.js')

      hello();
      ```

 4. Execute specified Javascript after all of the elements in a page have loaded

 - Because all the elements in your HTML are constructed incrementally from top to bottom, the location of our  `<script>` tags matter. By importing scripts to the end of the body, you’re ensuring that all HTML elements have loaded before attempting to interact with them. Scripts that are dependent on elements in the `<body>` can run into errors if they are imported in the `<head>`. The best recommendation is to have your script tag at the end within your `<body>` tag.

 5. Compare and contrast DOM and BOM

-  The DOM, or Document Object Model, contains a collection of nodes (HTML elements), that can be accessed and manipulated.

- The DOM is within the BOM (Browser Object Model).

- The chief browser object is the window object, which contains properties and methods we can use to access different objects within the window.

- The BOM allows you to communicate with the browser in JS, while the DOM allows you to manipulate HTML elements in JS.

- The BOM represents the browser as an object while the DOM represents the collection of HTML elements as an object.

 6. Manipulate key elements of the BOM, including the window and the document, using Javascript

- The `window` object is the core of our Browser Object Model (BOM).
  - It contains a bunch of properties and methods that will allow us to manipulate our browser.
    - You can see what the window object looks like through MDN or in your browser console.

  - One `window` property we often see is `window.document`, also known as `document` and how we see all of our document's HTML elements. `window.document` is our Document Object Model (DOM)
    - If we'd like to change our window page's title, we can do the below:
      ```javascript
      window.document.title = "My Profile Page"
      ```

  - Another common property for our window object is `window.onload`. This property will be assigned to a callback function which executes after your DOM, images, and any other HTML elements, finish loading. This is so your js doesn't run into any reference errors that will exist after your DOM loads.


---

# W9D2

## Element Selection and Manipulation Objectives

Below is a complete list of the element selection and manipulation objectives
for this lesson. When you complete this lesson, you should be able to perform
each of the following objectives. These objectives capture how you may be
evaluated on the assessment for this lesson.

-   **Compare and contrast `NodeList` and `HTMLCollection`**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    An **HTML Collection** contains an array-like object of HTML elements, with the HTML elements being a DOM element with a tag, e.g. `h1`, `span`, `div` etc.

    A **NodeList** contains an array-like object of Nodes, with the Node being a node that doesn't necessarily have tags, e.g. in <h1>Hello</h1>, `h1` and the string of `Hello` are both individual nodes.

-   **Write a JavaScript statement that selects one or more elements by their
    attributes or tags**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    document.getElementById("i") <-- Returns the HTML element with the specified id

    document.querySelectorAll("") <-- Returns a NodeList of all the elements with the specified HTML element. Can be used with selecting attributes by using CSS selectors, like tag, .class or #id

    document.querySelector("") <-- Returns the first Element within the document that meets the criteria

    document.getElementsByClassName("") <-- Returns a NodeList of all child elements with the given class name(s)

    document.getElementsByTagName("") <-- Returns an HTML Collection of the elements with the given tag name()

-   **Write JavaScript to add/remove attributes to an HTML element(s)**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    const selectedId = document.getElementById("my-id")
    selectedId.setAttribute("class", "my-class-name") <-- Adds attribute of `class="my-class-name"` to the selected element

    selectedId.removeAttribute("name-to-remove") <-- Removes element's first attribute with the given name

-   **Write JavaScript to get the children elements of a given parent element**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    const parent = document.getElementById("parent-node-id");
    const childNodes = parent.childNodes; <-- returns a NodeList of all the child nodes of given element.

-   **Write JavaScript to create/remove an HTML element(s) from the DOM**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    ```js
    const addElement = () => {
    	// create a new span element
    	const newElement = document.createElement("h1");

    	// and give it some text
    	newElement.innerText = "Jell-O, Burled!";

    	// add the newly created element and its content into the DOM
    	document.body.appendChild(newElement);
    };
    // run script when page is loaded
    window.onload = addElement;
    ```

-   **Append a child HTML element to a parent HTML element using JavaScript**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    ```js
    const addElement = () => {
    	const myNewElement = document.createElement("span"); // creates a new span element
    	const elementParent = document.querySelector("h1"); //selects the parent that the new element should be appended to

    	myNewElement.innerText = "I don't know what to write here..."; //adds text to the element created

    	elementParent.appendChild(myNewElement); //appends the new element as a child of the parent
    };
    window.onload = addElement; // run script when page is loaded
    ```

-   **Use a string to construct HTML elements with `.innerHTML`**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    document.getElementById("my-element-id").innerText = "Here I am adding a string inside of the element I selected!"

-   **Compare and contrast `.innerHTML` and `.innerText` methods on an HTML
    element**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    `innerHTML` interprets the string value as HTML, while `innerText` interprets the string as text. Be careful when using innerHTML however, as it is possible to allow malicious code to be injected into your site if improperly used!

-   **Write JavaScript to add/remove CSS inline-styling to an HTML element(s)**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    ```js
    const colorText = () => {
    	const fruits = document.getElementsByClassName("fruits");
    	const blueberry = fruits[2];
    	const grapes = fruits[3];

    	blueberry.style.color = "blue";
    	grapes.style.color = "purple";
    };

    window.onload = colorText;
    ```

-   **Manipulate DOM elements using the response of a `fetch` request**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    ```js
    try {
    	// we are using a try/catch block because we're handling the promises
    	// with async/await vs a promise chain.
    	const kittenResponse = await fetch(
    		"https://api.thecatapi.com/v1/images/search?size=small"
    	);
    	// Converts to JSON
    	const kittenData = await kittenResponse.json();
    	// console.log(kittenData); <-- Can console.log here to check what the object returned is in order to access necessary info
    	const kittenImgUrl = kittenData[0].url;
    	const kittenImg = document.querySelector("img");
    	kittenImg.src = kittenImgUrl;
    } catch (e) {
    	console.log("Failed to fetch image", e);
    }
    ```

---

# W9D3

### Event Handling Objectives

Below is a complete list of the event handling objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Be very familiar with these common event listeners: `click`, `submit`,
    `change`, and `DOMContentLoaded`**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

-   **Research to discover and utilize a new event listener to accomplish a
    given task**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

-   **Add and/or remove an event listener from one or more HTML elements**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

-   **Manipulate the DOM as a response to an event**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

-   **Diagram how an event propagates**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

-   **Predict and prevent the default behavior of an event**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

-   **Add, remove, and read data on an HTML element**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

---

# W9D4

### Browser Storage Objectives

Below is a complete list of the browser data storage objectives for this
lesson. When you complete this lesson, you should be able to perform each of
the following objectives. These objectives capture how you may be evaluated on
the assessment for this lesson.

## 1. Select a strategy for storing data in the client (browser)
  The most common examples we will face when implementing our own projects -

  1. What color scheme does the user prefer (e.g. light or dark) - `localStorage`, since this will be the user's own preference and can be stored in their browser until they feel like clearing it out.

  2. What's in the user's shopping cart (before they check out) - `localStorage`, when we are online shopping, we still want our
  items to still be there when we log back onto the site. Sometimes we don't have the funds right away or our browser unexpectedly closes. This helps with the user experience for sure

  3. Values a user typed into a long web form (which can then be restored if the user refreshes the browser tab) - `session cookies`, while your user may want to have access to their inputs after they refresh their browser, it's best to not have it stored there forever in case of any malware attacks. This approach will clear their inputs when they close their browser but still remain when they refresh their browser.

  4. Which pages has the user viewed most recently - `sessionStorage`, the user's page frequency can change the next day. We don't need to store it in localStorage.

  5. What does this user commonly search for- `localStorage` since this is data you want to remain throughout their user experience until they clear their browser cache.

## 2. Identify common use cases for storing data in the client
  - `session-cookies` is often used when we are dealing with user authentication, like logging into their facebook profile. This session-cookie allows us to work with the backend server and send back information that pertains to the authorized user.

  - `localStorage` is great if you're working with e-commerce like Amazon. The site can track what you've recently visited, what's currently in your cart and make suggestions based on your browsing patterns.

## 3. Compare and contrast localStorage, sessionStorage, and cookies
  - Cookies are much smaller (4KB vs 5MB) and a session cookie can keep track of a logged in user
    - Cookies are sent with each request/response cycle
    - We would want to send the current user to our server on each request for verification
  - Web Storage like localStorage and sessionStorage are kept on the browser, not sent to the server
    - it is best used for user preferences, like a night-mode
    - We probably don't need to do anything on our server with this information
    - If a user decides to clear out their localStorage, they can easily reset this preference

## 4. Construct JavaScript to add, modify, remove, and read data using the Web Storage API
  - localStorage and sessionStorage both have the same methods to retrieve, set and delete data.
    - Setting: `localStorage.setItem(key, dataString)` or `sessionStorage.setItem(key, dataString)`
    - Retrieving: `localStorage.getItem(key)` or `sessionStorage.getItem(key)`
    - Deleting: `localStorage.removeItem(key)` or `sessionStorage.removeItem(key)`

## 5. Construct JavaScript to add, modify, remove, and read data using cookies
  - Setting: `document.cookie = "session_id=12345"`
    - if you want to set an expiration on the cookie, it can be done using `max-age` or `expires`
      - `document.cookie = "session_id=12345;max-age=30"` -> max-age is set with seconds
      - `document.cookie = "session_id=12345: expires= Mon, 27 Sep 2021 00:00:00 GMT"` => expires value must be in GMT String format.

  - Retrieving: `document.cookie` will return all of our cookies as one string
    - `"session_id=12345; my_dog=cosmo; favorite_drink=coffee"`
    - We either have to split this long string to find what we're looking for, or use regex to match a pattern (don't need to memorize this!)

    ```javascript
    function getCookie(key) {
      const value = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
      return value ? value[2] : null;
    }
    ```

    - Deleting: `document.cookie = "session_id=;max-age=0"` or
    `document.cookie = "session_id=;expires Thu, 01 Jan 1970 00:00:00 GMT"`
      - as long as our date is in the past, the cookie will be deleted.


---

# W9D5

## Networking II Objectives

Below is a complete list of the networking II objectives for this lesson. When
you complete this lesson, you should be able to perform each of the following
objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Compare and contrast a MAC Address, an IP Address, and a port**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    MAC Address: Media Access Control (or MAC) addresses are permanent identifiers assigned to network interface hardware. These addresses are hardcoded into the device, so they can't be changed without physically changing the hardware. For this reason, MAC addresses are sometimes called physical addresses.

    IP Address: A number assigned to every device connected to a network that uses the Internet protocol.

    Port: virtual interface defined by software, acts as a connection point for a particular service or application

-   **Compare and contrast IP Addresses, Domain Names, and DNS**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    IP Address:

    Domain Names: Can be split into a few parts

    -   The top-level domain (TLD) is the last part of the domain, appearing just before the URL begins pointing at application routes (usually indicated with /'s) or query parameters (indicated with a ? and &'s). The best known TLDs are .com, .net, and .org
    -   Second-level domain. You'll often hear the TLD & second-level domain lumped together as "the domain". This is the name most people associate with the website
    -   Some websites will have additional domains to the left of the second-level domain. These can be referred to by their formal names (third-level domain, fourth-level domain, etc.) but are often informally referred to as subdomains. The best-known subdomain is www, though this is less-used on newer sites. Subdomains can usually be freely created by the consumer.

    DNS: (Domain Name System) a distributed approach to providing easily-understood names for internetworked devices. Practically, it's similar to a phone book: DNS allows us to look up a specific IP address by its domain.

-   **Diagram the process of sending data from a client to a server and back**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    -   Step 1: A port is opened on the client computer to make a TCP / UDP connection with the web server

    -   Step 2: The client computer queries its DNS server via a UDP connection to find the IP address. The DNS server will return the correct IP address and send back a packet with the information. The client computer will save the DNS into cache for future use.

    -   Step 3: The client computer will send and receive message to the server to acknowledge the request. This is a "handshake" to confirm connection. Once established, a session is opened between the client and the server, which will remain open as long as the browser is still on the website.

    -   Step 4: With the session open, the browser can make HTTP requests to the web server to receive web pages and other assets, and return them back to the client computer to render.

-   **Deploy an application on Netlify and use your own domain name (will not be
    tested on)**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    To set up app:

    -   Step 1: Sign up for [Netlify](https://www.netlify.com/) account
    -   Step 2: Click the `New Site from Git` button, follow the prompts for installation, link Github account, and select the repository and branch with the app to be deployed.
    -   Step 3: Test and debug as needed.
    -   Step 4: Click on the `Site Settings` button from the `Site Overview` page. Click the `Change site name` button. Enter a new name. This must be a unique name that will be used as the new URL for the site. Click the `Save` button and confirm that your-site-name.netlify.app works.
    -   Register for a domain name and follow the instructions to connect the site to the new registered name. A free domain name is offered through the [developer pack page](https://education.github.com/pack/offers), under Name.com.
