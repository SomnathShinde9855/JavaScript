In JavaScript, `"use strict"` is a directive that enables strict mode. Strict mode changes the way JavaScript is executed, making the language stricter about error checking and enforcing a cleaner, safer coding practice. It helps you catch common coding mistakes and "unsafe" actions, such as assigning values to undeclared variables.

Here's how it works:

### How to Enable Strict Mode:
Strict mode can be enabled for:
- An entire script.
- A specific function.

#### Example 1: Strict Mode for an Entire Script
```javascript
"use strict";
x = 10;  // Error: x is not defined (must be declared with `let`, `const`, or `var`)
console.log(x);
```

#### Example 2: Strict Mode for a Function
```javascript
function myFunction() {
  "use strict";
  y = 20;  // Error: y is not defined
  console.log(y);
}
myFunction();
```

### Benefits of Strict Mode:
1. **Eliminates some JavaScript silent errors** by changing them to throw errors.
2. **Fixes mistakes** that make it difficult for JavaScript engines to perform optimizations, so strict mode sometimes runs faster than non-strict code.
3. **Prohibits certain syntax** likely to be defined in future versions of ECMAScript, ensuring forward compatibility.

### Common Restrictions in Strict Mode:
- Variables must be declared before use (`let`, `const`, or `var`).
- You cannot delete variables or functions (`delete x` will throw an error).
- Duplicate parameter names in functions are not allowed.
- `this` in functions defaults to `undefined` instead of the global object.
  
Strict mode is a great way to write more secure and error-free code!