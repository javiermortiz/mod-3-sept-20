# W7D1

## Design Objectives

Below is a complete list of the design learning objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Select a palette of colors that follow basic color theory**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    Two major considerations should be made:

    -   Aesthetics: colors should be complimentary and not clash. Tools to
        assist with picking colors that look great include the following
        -   [Adobe color wheel](https://color.adobe.com/create/color-wheel)
        -   [Google's material design docs](https://material.io/design/color/the-color-system.html)
    -   Accessibility: Colors should be easily distinguishable, including for
        the color-blind. To achieve this, colors should be distinct in hue,
        saturation, and value. Tools to test how an image looks with that
        perspective include:
        -   [color-blindness simulator]()
        -   [Instructions to use the Firefox Accessibility Inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector/Simulation)

-   **Demonstrate a basic understanding of spacing and typography for readable
    interfaces**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    -   White Space: The most important design principle for intuitive design is
        white space. Leave empty space surrounding the text, images and
        interactive elements in your website significantly increases the
        legibility and usability. This is especially helpful for mobile friendly
        sites, as it is easy to mis-tap buttons that are too close, and
        difficult to read squashed text.

    -   Typography:
        -   Serif Fonts: Serifs are the small strokes on the ends of letters in
            fonts like Times New Roman. Nowadays serifs are still used for
            newsprint and to improve long-form readability on mobile or
            low-resolution devices.
            ![Serif Font - Times New Roman](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/HelveticaSpecimenCH.svg)
        -   Sans-Serif Fonts: Sans-serif fonts have no serifs. These are minimal
            and clean: ideal for single words or short-form phrases like
            headlines, icons, navigation. These tend toward larger text size and
            shorter strings of words, making serifs unnecessary. However, this
            is no longer necessary With modern devices due to much higher
            resolutions.
            ![Sans-Serif Font - Helvetica](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/Times_New_Roman-sample.svg)

-   **Demonstrate familiarity with standard navigation iconography and
    conventions**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    There are many common iconography, such as:
    ☰ for menu
    🔍 for search
    ⌂ for home
    ✉ for email

-   **Be able to identify and label HTML elements in a low-res wireframe spec**\
     <b><span style="color:CornflowerBlue">Answer:</span></b>

    ![Wireframe labeled](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/wireframes_labeled.jpg)

## HTML Fundamentals Objectives

Below is a complete list of the HTML fundamentals learning objectives for this
lesson. When you complete this lesson, you should be able to perform each of
the following objectives. These objectives capture how you may be evaluated on
the assessment for this lesson.

-   **Appropriately structure an HTML page**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    <html>
        <body>

            <h2>Lists</h2>
            <h3>Unordered Lists</h3>
            <p>
                Unordered lists are marked with bullet points and go in `ul` tags. Each list item goes in an `li` tag.
            </p>
            <h4>Types of lists:</h4>
            <ul>
                <li>Unordered lists (`ul`)</li>
                <li>Ordered lists (`ol`)</li>
            </ul>

            <h3>Ordered Lists</h3>
            <p>
                Ordered lists are numbered and go in `ol` tags. Each list item goes in an `li` tag.
            </p>
            <h4>Polya's Problem Solving Framework</h4>
            <ol>
                <li>Understand the problem</li>
                <li>Come up with a plan</li>
                <li>Carry out the plan</li>
                <li>Go back and improve your solution</li>
            </ol>

        </body>

    </html>

-   **Identify, utilize, and distinguish common semantic HTML tags**\
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    #### Basic HTML5 structure

    ```html

    ```

    ```html
    <html>
    	<head>
    		<title>My HTML Cheat Sheet</title>
    	</head>
    	<body></body>
    </html>
    ```

    #### Headings

    Headings come in different levels: h1 for the top-level heading, h2 for the top sub-heading, h3 for the next sub-heading. Importantly, every page should have one, and only one h1 tag. Google's web-crawlers will search for the h1 on each page to label the search result. If they don't find one, your will be penalized with lower search rankings.

    ```html
    <h1>This is a top level heading!</h1>
    ```

    #### Paragraphs

    ```html
    <p>Paragraphs of text go in `p` tags.</p>
    ```

    #### Unordered and Ordered Lists

    ```html
    <ul>
    	<li>Unordered lists (`ul`)</li>
    	<li>Ordered lists (`ol`)</li>
    </ul>
    <h4>Polya's Problem Solving Framework</h4>
    <ol>
    	<li>Understand the problem</li>
    	<li>Come up with a plan</li>
    	<li>Carry out the plan</li>
    	<li>Go back and improve your solution</li>
    </ol>
    ```

    #### Links

    ```html
    <a
    	href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
    	target="_blank"
    >
    	MDN
    </a>
    ```

    #### Tables

    ```html
    <table>
    	<thead>
    		<tr>
    			<th scope="col">Insect</th>
    			<th scope="col">Family</th>
    			<th scope="col">Fact</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<th scope="row">Ladybug</th>
    			<td>Coccinellidae</td>
    			<td>Can eat more than 5,000 insects!</td>
    		</tr>
    		<tr>
    			<th scope="row">Fruit flies</th>
    			<td>Drosophilidae</td>
    			<td>First living creatures in outer space!</td>
    		</tr>
    		<tr>
    			<th scope="row">Caterpillars</th>
    			<td>Heterobathmiidae</td>
    			<td>Have 12 eyes!</td>
    		</tr>
    	</tbody>
    	<tfoot>
    		<tr>
    			<td></td>
    			<td>I had no ideas!</td>
    			<td>Those are neat!</td>
    		</tr>
    	</tfoot>
    </table>
    ```

-   **Compare and contrast similar semantic HTML tags**

    -   **_div_ vs. _span_ vs. _p_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
    [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
    [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

    -   **_h1_ vs. _h2_ vs. _h3_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [h1](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)
    [h2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2)
    [h3](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3)

    -   **_ol_ vs. _ul_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
    [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

    -   **_br_ vs. _hr_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [br](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
    [hr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)

    -   **_link_ vs. _a_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
    [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

    -   **_head_ vs. _header_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
    [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)

    -   **_head_ vs. _body_ vs. _footer_**\
        <b><span style="color:CornflowerBlue">Answer:</span></b>

    [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
    [body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
    [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

    [MDN Link to HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

# W7D2

## CSS Fundamentals Objectives

Below is a complete list of the CSS fundamentals learning objectives for this
lesson. When you complete this lesson, you should be able to perform each of
the following objectives. These objectives capture how you may be evaluated on
the assessment for this lesson.

<u><b>Importing CSS stylesheets</b></u>

-   **Import a CSS stylesheet into an HTML page**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    Best practice is to put the `<link>` tags inside of the `<head>` tag before
    the `<body>`. This way, when the page is first loaded, HTML and CSS are
    parsed at the same time. If the `<link>` was after the `<body>`, the user
    might see unstyled elements before the CSS is read and applied.

    ```html
    <head>
    	<link rel="stylesheet" href="/styles/site.css" />
    </head>
    ```

-   **Import CSS from one file into another**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    `css /* A local import */ @import url("./style.css"); `

<u><b>CSS Specificity lesson</b></u>

-   **Explain how CSS rules are applied based on their order and specificity**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    | **Position:** | **A** | **B** | **C** | **D** |
    | ------------- | ----- | ----- | ----- | ----- |
    | _Selectors:_ | inline | IDs | classes, attributes, pseudo-classes | tags and pseudo-elements |

    -   A is the number of inline styles used (ie "the most specific", set to 0 or 1)
    -   B is the number of IDs being selected
    -   C is the number of classes, attributes, and pseudo-classes being selected
    -   D is the number of tags and pseudo-elements

    In this matrix of values, the number of selectors on the left will override
    any higher number of selectors that come after.

-   **Calculate the specificity of CSS rules and determine which rule override
    the properties of another**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    ```css
    #blue_link:hover {
    	color: blue;
    }

    a.red_link:hover {
    	color: red;
    }
    ```

    ```html
    <a href="/" id="blue_link" class="red_link"> Which color am I on hover? </a>
    ```

    `#blue_link:hover` has a score of 0-1-1-0 and `a.red_link:hover` has a score
    of 0-0-2-1. When you hover, the link is blue because the ID is in a higher
    position, even though there are more class, pseudo-class, and tag selectors
    on `a.red_link:hover`

<u><b>CSS Selection lesson</b></u>

-   **Select elements by tag, id, and/or class**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    | | _example_ | _explanation_ |
    | ------------- | :-------: | :------------------------------------------: |
    | **tag** | div | selects all `<div>`elements |
    | **id (#)** | #content | selects the element with ID of "content" |
    | **class (.)** | .active | selects all elements with the class "active" |

-   **Write "combinators" to create compound selector statements to target
    specific elements**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    ```css
    div.yellow.active {
    	color: yellow;
    }
    ```

    This compound selector selects all div elements with the classes of `yellow`
    and `active`

    ```html
    <div class="yellow active">I am yellow</div>
    ```

    ```css
    /* any children <p> tags */
    div p {
    	color: green;
    }

    /* only direct children */
    div > p {
    	color: green;
    }

    /* adjacent sibling selector */
    img + p {
    	color: green;
    }
    /* will select <p> tags which are siblings of <img> tags */
    ```

    `space` after a selector indicates you are selecting any descendants of that
    tag, regardless if they are direct children or not.

    `>` after a selector indicates that you only want to select DIRECT children.

    `+` after a selector means you're selecting any adjacent sibling

-   **Apply pseudo classes (active, hover, visited) for specific elements in
    specific states**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    ```css
    a:hover,
    a:active {
    	text-decoration: purple wavy underline;
    }
    ```
    This puts a wavy purple underline on `<a>` tags when the user hovers and
    clicks on the link.

<u><b>Overflow lesson</b></u>

-   **Use the `overflow`, `overflow-x`, and `overflow-y` properties to effect
    clipping and scrolling on elements**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    | | description |
    | ---------- | :-------------------------------------: |
    | overflow | shorthand for overflow-x and overflow-y |
    | overflow-x | content overflow on the x-axis |
    | overflow-y | content overflow on the y-axis |

    Values: `visible, hidden, clip, scroll, auto`

<u><b>Text lesson</b></u>

-   **Research and apply CSS to modify the text style on an element:**

    -   **Type faces, sizes, styles, and weights**
        <b><span style="color:CornflowerBlue">Answer:</span></b>
        https://developer.mozilla.org/en-US/docs/Web/CSS/font-family

    -   **Text transformation and alignment**
        <b><span style="color:CornflowerBlue">Answer:</span></b>
        https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
        https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

    -   **Colors expressed as names, hexadecimal RGB values, and decimal RGB values**
        <b><span style="color:CornflowerBlue">Answer:</span></b>
        https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color

    -   **Everything about borders**
        <b><span style="color:CornflowerBlue">Answer:</span></b>
        https://developer.mozilla.org/en-US/docs/Web/CSS/border

    -   **Shadows**
        <b><span style="color:CornflowerBlue">Answer:</span></b>
        https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
        https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow()

    -   **Opacity (transparency)**
        <b><span style="color:CornflowerBlue">Answer:</span></b>
        https://developer.mozilla.org/en-US/docs/Web/CSS/opacity

-   **Explain the generic font names "serif", "sans-serif", and "monospace" and
    correctly identify examples of each**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    A serif is a decorative hook on letters. Sans serif means without any of
    these 'hooks'. Monospace means each character takes up the same amount of
    space.

    ![font names](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-generic-font-names.png)

-   **Explain why using Web fonts helps with consistent experience across viewing
    devices**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    Using Web fonts (such as Google Fonts) provides broader access to different
    fonts, as well as the reassurance that text will appear the same across
    different browsers and devices.

    If for some reason the user cannot download the font "Ubuntu", then it will
    fall back on a generic `sans-serif` font.

    ```css
    /* Importing "Ubuntu" from the Google Fonts library */
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");

    p {
    	font-family: "Ubuntu", sans-serif;
    }
    ```

<u><b>Style Background</b></u>

-   **Add and style an image to the background of an element**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    Use the [background-image property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) to select your image.

    Use the [background-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) to appropriately scale your image.

    ```css
    .my_div {
    	background-image: url("../media/rosie.png");
    	background-size: cover;
    }
    ```

<u><b>Absolute and Relative Unit Lesson</b></u>

-   **Recall and explain the different absolute and relative length units in CSS**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    | unit | relative | absolute | description |
    | ---- | :------: | :------: | ----------- |
    | px | | ✅ | 1px = 1/96th of an inch |
    | pt | | ✅ | 1pt = 1/72nd of an inch |
    | cm | | ✅ | centimeters |
    | mm | | ✅ | millimeters |
    | in | | ✅ | inches |
    | em | ✅ | | The font size of the containing element |
    | rem | ✅ | | The font size of the root element |
    | % | ✅ | | Percentage of the parent element |
    | vw | ✅ | | a number 1-100 representing % of the viewport width |
    | vh | ✅ | | a number 1-100 representing % of the viewport height |

## Box Model and Positioning Objectives

Below is a complete list of the box model and positioning objectives for this
lesson. When you complete this lesson, you should be able to perform each of
the following objectives. These objectives capture how you may be evaluated on
the assessment for this lesson.

-   **Describe how:**

    -   **padding and margins work in the box model**
        <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

    -   **the browser positions a fixed positioned element**
        <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

    -   **the browser positions a relatively positioned element**
        <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

    -   **the browser positions absolutely positioned elements with and without a
        relatively positioned parent element**
        <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

    -   **the browser positions a static positioned element**
        <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Identify elements rendered with specific padding and margin settings**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Apply padding and margins to HTML elements to achieve a desired layout**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Apply positioning settings to elements (fixed, relative, and absolute) to
    HTML elements to achieve a desired layout**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Identify which HTML elements have a default "inline" display value**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Identify which HTML elements have a default "block" display value**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Describe and use z-index positioning of elements**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

---

# W7D3

## Flexible Box Model Objectives

Below is a complete list of the flexible box model objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

<u><b>Flexible Box Model Lesson</b></u>

-   **Explain how flexible box layout lays out elements**
    <b><span style="color:CornflowerBlue">Answer:</span></b>

    ```css
    div {
    	display: flex;
    }
    ```

-   **Use the `flex` property to specify grow, shrink, and basis values.**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    | Property name | default value | description |
    | ------------- | :-----------: | ----------- |
    | flex-grow | 0 | a number indicating how much an item can grow in relation to the flexbox |
    | flex-shrink | 1 | a number indicating how much an item should shrink if needed |
    | flex-basis | auto | a unit measurment length (ie 40px) or keyword (max-content, min-content, and fit-content) indicating how much space an element should take up |

    All 3 of these properties must be set on the _child_ elements of the flexbox container.

    Examples (checkout source code in raw markdown):

    <style>
        {
            box-sizing: border-box;
        }
        .container {
            width: 90%;
            display: flex;
            height: 100px;
            margin: 8px auto;
        }
        .container div {
        color: black;
        background-color: lavender;
        height: 100px;
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        }
        .container .grow {
        flex-grow: 2;
        background-color: blanchedalmond;
        }
        .container .shrink {
        flex-shrink: 4;
        background-color: #04AA6D;
        }
        .flex_basis {
        background-color: rebeccapurple;
        width: 90%;
        display: flex;
        height: 100px;
        margin: 8px auto;
        border: 1px solid black;
        }
        .flex_basis div {
        flex-basis: fit-content;
        border: 1px solid white;
        display: flex;
        align-items: center;
        padding: 5px;
        }
    </style>

    <div class="container">
        <div class="grow">flex-grow: 2</div>
        <div>flex-grow: 1</div>
        <div>flex-grow: 1</div>
    </div>

    Resize the window and watch these boxes shrink and flex:

    <div class="container">
        <div class="shrink" >flex-shrink: 4</div>
        <div>flex-grow: 1</div>
        <div class="grow">flex-grow: 2</div>
        <div>flex-grow: 1</div>
    </div>

    In this example, every child element has `flex-basis: fit-content`

    <div class="flex_basis">
        <div >flex-basis: fit-content</div>
        <div>-----> now it</div>
        <div>fits the content of my box</div>
    </div>

-   **Use the `flex-direction` property to direct the layout of the content**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    Flex-direction sets the main axis of the flexbox container to be horizontal
    or vertical. All child elements will be arranged in the direction specified
    by this property.
    Valid properties: `row, row-reverse, column, column-reverse`

    <style>
        .column {
            width: 200px;
            height: 200px;
            background-color: coral;
            color: black;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        }
        .column div {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
        }
    </style>

    <div class="column">
        <div>flex-direction</div>
        <div>is set to</div>
        <div>column</div>
    </div>

    The default `flex-direction` of flexbox is `row`.

-   **Use the `flex-wrap` property to affect the wrap of content layout within
    an element using flexible box layout**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    Elements will be distributed based on this rule.
    Valid values: `nowrap, wrap, wrap-reverse`

    <style>
        .wrapping {
            display: flex;
            width: 200px;
            height: 100px;
            background-color: #9A3046;
            margin: 10px auto;
            flex-wrap: wrap;
            padding: 5px;
        }
        .wrapping div {
            margin: 5px;
            border: 1px solid white;;
            flex-basis: 14%;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>

    <div class="wrapping">
        <div>w</div>
        <div>r</div>
        <div>a</div>
        <div>p</div>
        <div>p</div>
        <div>i</div>
        <div>n</div>
        <div>g</div>
        <div>✨</div>
    </div>

-   **Use `align-self`, `justify-content`, and `align-items` to change the way
    that children elements are laid out in a flexible box layout**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    When placed on the container flexbox, `justify-content` will distribute the
    children across the main axis and `align-items` across the cross-axis.
    `align-self` is used on children of a flexbox to align the child element.

    -   [`justify-content` documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
    -   [`align-items` documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
    -   [`align-self` documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

    <style>
        .new_container {
            padding: 5px;
            width: 80%;
            height: 50px;
            background-color: lightgreen;
            margin: 10px auto;
            color: black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
        }
        .new_container2 {
            padding: 5px;
            width: 80%;
            height: 50px;
            background-color: tomato;
            margin: 10px auto;
            color: black;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            text-align: center;
        }
        .new_container3 {
            padding: 5px;
            width: 80%;
            height: 50px;
            background-color: #d10080;
            margin: 10px auto;
            color: black;
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            text-align: center;
        }
        .new_container4 {
            padding: 5px;
            width: 80%;
            height: 50px;
            background-color: #006eff;
            margin: 10px auto;
            color: black;
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            text-align: center;
        }
    </style>

    <div class="new_container">
        <div>Div 1</div>
        <div><--- justify-content: space-between ---->
            <br />align-items: center
        </div>
        <div>Div 3</div>
    </div>

    <div class="new_container2">
        <div>Div 1</div>
        <div><--- justify-content: space-around ---->
            <br />align-items: flex-end
        </div>
        <div>Div 3</div>
    </div>

    <div class="new_container3">
        <div>Div 1</div>
        <div><--- justify-content: space-evenly ---->
            <br />align-items: flex-start
        </div>
        <div>Div 3</div>
    </div>

    <div class="new_container4">
        <div style="align-self: flex-end">align-self: flex-end</div>
        <div>Div 2
        </div>
        <div style="align-self: center">align-self: center</div>
    </div>

## Grid Layout Objectives

Below is a complete list of the grid layout objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Explain how grid layout lays out elements**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    Grid is a two-dimensional layout system that lets position elements using
    columns and rows. Grid is great for customizing an entire page layout.

    ```css
    .grid-container {
    	display: grid; /* OR inline-grid */
    }
    ```

-   **Use the `grid-template-columns`, `grid-template-rows`, and `grid-template`
    properties to specify the layout of the grid using relative and absolute
    measures**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    `grid-template-columns` and `grid-template-rows` is used to create columns
    and rows with a certain length separated by spaces. The child elements of
    the grid container will be distributed based on the layout you set up.

    ```css
    .grid-container {
    	display: grid;
    	grid-template-columns: 50px 100px 60px;
    	/* there are 3 columns of varying sizes */
    }
    ```

    To span across mutliple columns/rows use `grid-column`: `<start>` / `<end>`
    and `grid-row`: `<start>` / `<end>` on the _child_ element of the grid.
    `<end>` is exclusive. To span across all 3 columns in the grid below, you
    can use this rule:

    ```css
    .grid-container div:nth-child(4) {
    	grid-column: 1 / 4;
    }
    ```

    <style>
        .grid-container {
            display: grid;
            grid-template-columns: 40% 50% 10%;
            grid-template-rows: 50% 50%;
            height: 150px;
            background-color: aquamarine;
            color: black;
        }
        .grid-container div {
            border: 1px solid black;
            padding: 5px;
        }
        .grid-container div:nth-child(4) {
            grid-column: 1 / 4;
        }
    </style>

    Explore the HTML and CSS in raw markdown:

    <div class="grid-container">
        <div>grid-template-rows: 100% 100%</div>
        <div>grid-template-columns: 40% 50% 10%</div>
        <div>sidebar</div>
        <div>grid-column: 1 / 4</div>
    </div>

-   **Use `grid-template-areas` to label areas of a grid and `grid-area` to
    assign an element to the area**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    `grid-template-areas` allows you to attach named properties with specific
    positions in your grid. Any `grid-area` you want to span across multiple
    rows or columns can be done with a repeat name in `grid-template-areas`.
    Any position you want to be empty needs to have a `.` in place of a name.

    Each row is a string with columns separated by spaces. No commas between
    rows!

    ```css
    .my-grid-ocean {
    	/* see raw markdown for all code */
    	grid-template-areas:
    		"fish fish ."
    		". . whale"
    		"dolphin . whale";
    }
    .🐠 {
    	grid-area: fish;
    }
    .🐬 {
    	grid-area: dolphin;
    }
    .🐳 {
    	grid-area: whale;
    }
    ```

    ```html
    <div class="my-grid-ocean">
    	<div class="🐠">🐠🐠🐠🐠🐠</div>
    	<div class="🐳">🐳</div>
    	<div class="🐬">🐬</div>
    </div>
    ```

    <style>
        .my-grid-ocean  {
            display: grid;
            margin: 10px auto;
            width: 80%;
            border: 1px solid #007fff;
            background-color: #007fff;
            font-size: 2em;
            justify-items: stretch;
            grid-template-rows: 50px 50px 50px;
            grid-template-areas:
                "fish fish ."
                ". . whale"
                "dolphin . whale";
        }
        .my-grid-ocean div {
            text-align: center;
            border: 1px solid white;
            background-color: lightblue;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .🐠 {
            grid-area: fish;
        }
        .🐬 {
            grid-area: dolphin;
        }
        .🐳 {
            grid-area: whale;
        }
    </style>

    <div class="my-grid-ocean">
        <div class="🐠">🐠🐠🐠🐠🐠</div>
        <div class="🐳">🐳</div>
        <div class="🐬">🐬</div>
    </div>

-   **Use `grid-column-gap`, `grid-row-gap`, and `grid-gap` to set the "gutter"
    areas between elements in a grid layout**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    These properties set the space between the rows & columns.

    ```css
    .forest {
    	/* see raw markdown for all code */
    	grid-row-gap: 5px;
    	grid-column-gap: 5px;
    }
    ```

    <style>
        .forest {
            display: grid;
            width: 200px;
            height: 200px;
            grid-template-columns: repeat(4,1fr);
            grid-template-rows: repeat(4,1fr);
            background-color: #355E3B;
            margin: 10px auto;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            font-size: 1.5em;
        }
        .forest > div {
            background-color: lightgreen;
        }
    </style>

    <div class="forest">
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
    </div>

-   **Explain and use the "fr" unit of measure**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    fr represents a fraction of space left. The [repeat CSS function](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>) is used to repeat a certain number of fractions.

    The above example uses:

    ```css
    .forest {
    	/* see raw markdown for all code */
    	grid-template-columns: repeat(4, 1fr);
    	grid-template-rows: repeat(4, 1fr);
    }
    ```

-   **Use `justify-items`, `align-items`, `justify-content` and `align-content`
    to layout items in each grid area**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    `justify-items` aligns all the items _horizontally_:

    ```html
    <div class="forest" style="justify-items: start"></div>
    ```

    <div class="forest" style="justify-items: start">
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
    </div>

    `align-items` aligns all the items _vertically_:

    ```html
    <div class="forest" style="align-items: end"></div>
    ```

    <div class="forest" style="align-items: end">
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
        <div>🌳</div>
    </div>

    `justify-content` aligns the grid elements along the row axis
    `align-content` aligns the grid elements along the column axis (block axis)

    ```css
    .douglas_firs {
    	/* see raw markdown for all code */
    	align-content: space-evenly;
    	grid-template-columns: auto auto;
    }
    ```

    <style>
    .douglas_firs {
        display: grid;
        width: 200px;
        height: 200px;
        grid-template-columns: auto auto;
        align-content: space-evenly;
        background-color: #355E3B;
        margin: 10px auto;
        font-size: 3em;
    }
    .douglas_firs div {
        background-color: lightgreen;
    }
    </style>

    <div class="douglas_firs" style="justify-content: space-evenly">
        <div>🌲</div>
        <div>🌲</div>
        <div>🌲</div>
        <div>🌲</div>
    </div>

-   **Compare and Contrast Flex Box and Grid layouts and their use cases**
    <b><span style="color:CornflowerBlue">Answer:</span></b>
    A lot of the time, choosing between Flex Box or Grid comes down to personal
    preference. Keep in mind Grid is designed for 2-dimensional layouts, while
    flexbox is designed to be 1-dimensional. [Read more on MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)

## Media Query Objectives

Below is a complete list of the media query objectives for this lesson. When
you complete this lesson, you should be able to perform each of the following
objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Identify the different types of media that a media query can target**
    <b><span style="color:CornflowerBlue">Answer:</span></b> 
        
    - "all" refers to all devices which is the default for a media query when the type is not provided
    - "print" applies to the layout of the document when a person intends to print it
    - "screen" applies to the layout of the document when a browser displays it
    - "speech" refers to when a screen reader reads the content

-   **Explain how the media features (and prefixed subfeatures) of "aspect
    ratio", "height", "orientation", and "width" are applied**
    <b><span style="color:CornflowerBlue">Answer:</span></b> 
        
| Feature      | Applies to                                   | Subfeature prefixes |
|--------------|----------------------------------------------|---------------------|
| aspect ratio | The ratio of width to height of the viewport | max- and min-       |
| height       | The height of the viewport                   | max- and min-       |
| orientation  | If width is larger than height or vice versa |                     |
| width        | The width of the viewport                    | max- and min-       |


-   **Use media queries to change the styles of content in an HTML page to
    achieve a desired effect**
    <b><span style="color:CornflowerBlue">Answer:</span></b> 
        
    - Be able to set conditions for bounds on your device that will trigger a different style. For example, if our viewport shrinks below a certain height we could remove a menu by setting its `display` property to `none`, or if we have a color background we can change it to white for `print` media, etc.
    - A code example: Given the following CSS rule, write a media query that would change the `product-index` container so the items appear in a verticle fashion for a viewport width less than or equal to 300px:
        
  ```css
  .product-index {
    display: flex;
  }

  .product-index__item {
    background-color: blue;
  }
  ```
        
  - The media query we could write to accomplish this:
  
  
  ```css
  @media screen and (max-width: 300px) {
    .product-index {
      flex-direction: column;
    }
  }
  ```

---

# W7D4

## Interactivity Objectives

Below is a complete list of the interactivity objectives for this lesson. When
you complete this lesson, you should be able to perform each of the following
objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Describe and use the `transition` property show animated changes due to
    class and pseudo-class CSS rule application**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

## Design Spec Objectives

Below is a complete list of the design spec objectives for this lesson. When
you complete this lesson, you should be able to perform each of the following
objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Given a wire-frame spec and a style guide, create a professional looking
    webpage**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Given a high-res spec, create a webpage that is a pixel-perfect match**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Create a base CSS file containing styles for headings, paragraphs,
    buttons, links and horizontal rules**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

## CSS Frameworks Objectives

Below is a complete list of the CSS frameworks objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Recognize a variety of CSS frameworks, including Bootstrap, Material and
    Tailwind**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Load a CSS framework into a project**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

-   **Extend and modify element styles in a CSS framework to match a spec**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

---

# W7D5

## Netlify Deployment Objectives

Below is a complete list of the Netlify deployment objectives for this lesson.
When you complete this lesson, you should be able to perform each of the
following objectives. These objectives capture how you may be evaluated on the
assessment for this lesson.

-   **Deploy a webpage with static assets onto Netlify**
    <b><span style="color:CornflowerBlue">Answer:</span></b> (No answer yet)

    -   Step 1: Sign up for a [Netlify]() account
    -   Step 2: Click the `New Site from Git` button. Click the `GitHub` button and follow the prompts to authorize the installation.
    -   Step 3: Select the repository of the website you want to deploy.
    -   Step 4: Test and debug if necessary.
    -   Step 5: Change the name of the site to one that can identify your project.
    -   Step 6: Test that your-site-name.netlify.app works!
