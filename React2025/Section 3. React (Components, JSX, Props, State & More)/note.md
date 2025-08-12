JSX
===
## What is JSX (JavaScript XML)?
- special syntax in `React` that lets you write HTML-like code inside JavaScript
- Used to describe & create HTML elements in JS in a `declarative` way

React Components
===
## What is React Components?
- small, reusable peice of UI
    - They can be function components or class components (function components are more common today)
    - Each component can have its own data (state) and receive data from outside (props)

- Example
    ```
    function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
    }

    export default Welcome;

    -------------------------------------------

    import Welcome from './Welcome';

    function App() {
    return (
        <>
        <Welcome name="Jun" />
        <Welcome name="Alice" />
        </>
    );
    }
    ```
    - Rules
        - Uppercase Function
        - Must return JSX


## Why use?
- `Reusability`: Make a button once, use it everywhere
- `Isolation`: Each component manages its own state and logic
- `Composability`: Build small pieces → combine into big apps

# Summary
- Think of `JSX` as the language you write your component’s UI in, and Components as the building blocks you create your app with.
- `JSX` describes what the UI should look like
- `React` figures out how to update it when count changes

