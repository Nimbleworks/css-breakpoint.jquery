css-breakpoint.jquery
=====================

Detect the current breakpoint defined by your media queries and load callbacks for when the breakpoint changes.

The script reads the body:after content attribute of the html document. You will need to define this in your main stylesheets for each of your breakpoints. With media queries you can switch between stylesheets and therefore the body:after declaration. This is what the script detects.

##Usage

Insert the following rule into any stylesheet you want to detect, changing the content attribute to the key you would like to use.

````css
body:after {
    content: 'basic';
    display: none;
}
````

Using media queries to switch between stylesheets, you will be able to detect which one is active in JavaScript using the following methods:

````js
service.breakpoint()
````
Returns the key used in the content attribute (see above) in the currently active stylesheet.

````js
service.breakpoint((string) key)
````
Returns a boolean. True if the key of the currently active stylesheet matches the string supplied as an argument.

````js
service.service.onBreakpointChange((function) callback)
````
Adds a callback function. If the breakpoint changes when the browser window is resized then this function will be called.
