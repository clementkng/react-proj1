# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

1. ReactDOM.render renders the specified React component (first argument) into the DOM element specified (second argument).

2. A UI library allows a nice design to be implemented pretty conveniently. However, it does not allow for design customization very easily, which can be bad if what you want isn't supported by the library.

3. We need to wrap addToCart w/ another function because we need to pass an argument into our addToCart call, so we can't use the syntax of just assigning the onClick to the function (rather than a function call). Therefore, we instead use an anonymous function that calls addToCart with our specified argument.

4a.
React allows us to reuse components, so we can write only one component and pass in different prop data (via Data.js) to render the full cart, but only write the Product component once.

4b. We separate the data from the React component as well, so another benefit is if we need to add to the list, we can easily do that from the object. However, if we need to modify properties of how Products are rendered, we can do that within the Product.js. Also, putting it in a separate object allows us to use JSON-like syntax, which would break the JS syntax elsewhere. Essentially, modularity is the main benefit.

2.0. SearchBar requires state b/c it needs to know what the search text is in the bar, which changes over time.

2.1. Parent-to-child communication is done w/ props passed from parent to child. Child-to-parent communication is done w/ functions that are passed into the children that update the parent. These can't be the same since data should flow only one way through React components (so parents only pass data to children directly).

2.2. We could try changing the data of the cartItems, causing it to rerender the component.

