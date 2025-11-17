React
---
## What is React
- The Library for web and native user interface
- JavaScript Library to build **user interfaces (UIs)**, especially for web applications.

## Why use React
- Before React, websites were often built with plain HTML + JS. But problems arises:
    - The whole page needed to reload to update just one part
    - The code became hard to mange as app grew
    - Complex JavaScript code quickly becomes error-prone
- React Solves...
    - It updates only the **parts of the page that change** - *no full page reload*
    - Lets you build your app using **small, reusable pieces called components**

## Key Concepts
1. Component
    - A component is like a **small piece of UI** such as *button, menu, or profile card*
    - You build them using JS functions that return something that looks like HTML (using JSX)

    ```
    function Welcome() {
        return <h1>Hello, React!</h1>;
    }
    ```
2. JSX (JavaScript XML)
    - JSX is a special syntax that lets you write HTML inside JavaScript
    ```
    const element = <h1> Hello JSX! </h1>;
    ```
3. State and Events
    - You can **store and update data** insdie a component using ``state``
    - React lets you handle **events** like clicks, typing, etc.
    ```
    import { useState } from 'react';

    function Counter() {
        const [count, setCount] = useState(0);

        return (
            <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            </>
        );
    }
4. Virtual DOM
    - React does NOT touch the real HTML (DOM) directly
    - Instead, uses virtual DOM - a fast, temporary version - to gifure out what changed
    - Then it updates only the changed part -> this makes React fast and efficient
    
## React = Declarative UI Programming
- With React, you define the target UI state(s) - not the steps to get there
    - Instead, React will fiture out & perform the necessary steps

- Imperative vs Declarative

    | Style           | What it means                                                                                                |
    | --------------- | ------------------------------------------------------------------------------------------------------------ |
    | **Imperative**  | You write **step-by-step instructions** to make the UI change. You tell the system **how** to do everything. |
    | **Declarative** | You describe **what the UI should look like**, and React figures out **how** to make it happen.              |

    - Imperative (JavaScript Vanila Code)
    ```
    let btn = document.querySelector('button');

    if (user.isLoggedIn) {
        button.textContent = 'Continue';
    }
    else {
        button.textContent = 'Log in';
    }

    document.body.append(btn);
    ```

    - Declarative (React)
    ```
    let content;

    if (user.isLoggedIn) {
        content = <button>Continue</button>
    }
    else {
        content = <button>Login</button>
    }

    return content;.
    ```

    
