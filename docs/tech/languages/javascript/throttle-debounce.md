---
keywords:
  [throttle, debounce, javascript, event, programming, language, code, coding]
title: Throttle and Debounce | JavaScript | Languages | Tech-Notes
sidebar_label: Throttle and Debounce
description: In an event-driven development, some events happen more often than we would like to handle. But it is possible to control the execution of handler functions.
---

# Throttle and Debounce

In an event-driven development, some events happen more often than we would like to handle. Taking events in a browser as an example, this can occur while a user scrolls the window or repeatedly clicks the same button.
Fortunately, it is possible to control the execution of handler functions using some strategies such as throttle and debounce.

<br/>

## Throttle

- A throttled function is called once per a certain amount of time;
- Any additional function calls within the specified time interval are ignored;
- Throttle works as a valve which controls the flow rate function executions.

### Implementation Example

```js
/**
Returns a throttled version of the provided callback.
The returned function will call the callback only once within the specified timeout.
Subsequent calls made within the timeout will be ignored.
@param {Function} callback - The callback function to throttle.
@param {Number} [timeout=500] - The timeout in milliseconds.
@returns {Function} - The throttled version of the provided callback.
*/
function throttle(callback, timeout = 500) {
  let waiting = false;
  return (...args) => {
    if (!waiting) {
      callback(...args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, timeout);
    }
  };
}
```

Callback is the function that needs to be throttled and timeout is the throttle waiting time in milliseconds.

This function can be used as follow:

```js
const throttledFunction = throttle((arg1, arg2) => myFunction(arg1, arg2), 300);
```

<br/>

## Debounce

- A debounced function is called after a certain amount of time passed since its last call;
- It implies a delay between the event and the handler function call.

### Implementation Example

```js
/**
Returns a debounced version of the provided callback.
The returned function will call the callback only if it hasn't been called again within the specified timeout.
If a subsequent call is made within the timeout, the timer is reset and the callback is called again only after the timeout.
@param {Function} callback - The callback function to debounce.
@param {Number} [timeout=500] - The timeout in milliseconds.
@returns {Function} - The debounced version of the provided callback.
*/
function debounce(callback, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}
```

Callback is the function that needs to be debounced and timeout is the waiting time in milliseconds that the function needs to wait to be called again since last call.

This function can be used as follow:

```js
const debouncedFunction = debounce((arg1, arg2) => myFunction(arg1, arg2), 300);
```

<br/>

## Comparison

Below is an example of the implementation of both throttle and debounce, making it possible to compare how each one handles function calls.

<iframe height="300" style={{width: '100%'}} scrolling="no" title="JS Debouncer" src="https://codepen.io/difranca/embed/OJzqeKE?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/difranca/pen/OJzqeKE">
  JS Debouncer</a> by difranca (<a href="https://codepen.io/difranca">@difranca</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe><br/><br/>

<br/>

:::tip

There are JavaScript utility libraries that already implement throttle and debounce functions, such as:

- [Underscore.js](https://underscorejs.org)
- [Lodash](https://lodash.com)

:::

<br/>

:::note More Information

- https://redd.one/blog/debounce-vs-throttle
- https://www.freecodecamp.org/news/javascript-debounce-example/

:::
