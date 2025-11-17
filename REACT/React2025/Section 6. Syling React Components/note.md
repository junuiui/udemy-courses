Styling React Apps
==
## Styling with Vanila VSS
- You can create a .css file (e.g., App.css) and import it directly into a component file.
- All styles in that CSS file are global by default, meaning they can affect every component.
- Example:
    ```
    // App.css
    h1 {
        color: blue;
    }

    import './App.css';
    export default function App() {
        return <h1> Effect on here! <h1>
    }
    ```

- Advantage
    1. CSS code is decoupled from JSX code
    2. You write CSS code as you (maybe) know and (maybe) love it
    3. CSS code can be written by another developer who needs only a minimal amount of access to your JSX code
- Disadvantages
    1. Need to know CSS
    2. CSS code is not scoped to components -> CSS rules may clash across components (e.g., same CSS class name used in different components for diffrent purposes)

## Scoping
- To **avoid style conflicts between components**, you can use **CSS Modules**
- CSS Modules scope class names automatically to the component where they are imported
- Example:
    ```
    /* Button.module.css */
    .btn {
        background: purple;
        color: white;
    }

    import styles from './Button.module.css';
    export default function Button() {
        return <button className={styles.btn}>Click Me</button>;
    }
    ```

## CSS in JS styling with "Styled Components"
- A popular library that lets you define styles inside JavaScript files.
- Styles are scoped to the component automatically.
- Example:
    ```
    import styled from "styled-components";

    const Button = styled.button`
        background: teal;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 8px;
    `;

    export default function App() {
        return <Button>Click Me</Button>;
    }

    ```

## Syling with Tailwind CSS
- Utility-first CSS framework with prebuilt classes.
- You don’t write CSS files; instead, you compose class names in JSX.
- Example:
    ```
    export default function Card() {
        return (
            <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
            <p className="text-gray-600">Some description here.</p>
            </div>
        );
    }
    ```

## Static & Dynamic (Conditional) Styling
- `Static styling`: Apply fixed class names or styles that never change.
- `Dynamic styling`: Use conditional logic to change styles based on state/props.
- Example (conditional Tailwind classes):
    ```
    export default function Button({ active }) {
        return (
            <button
            className={`px-4 py-2 rounded ${
                active ? "bg-green-500 text-white" : "bg-gray-300 text-black"
            }`}
            >
                {active ? "Active" : "Inactive"}
            </button>
        );
    }
    ```
