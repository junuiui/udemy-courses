
## Redux?
- A **state management system** for **cross-component** or **app-wide** state

## What is Cross-Component & App-Wide State?
- **Local State**
  - State belongs to a single component
    - E.g., Listening to user input on an input field or toggling a "show more details" field
      - Should be **managed inside the component** via `useState()` / `useReducer()`
- Cross-component State
  - State affecting multiple components
    - E.g., open / closed state of a modal overlay
      - Requires "prop drilling" or `React Context` or `Redux`
- App-wide State 
  - E.g., user authentication status or chosen theme
    - Requires "prop drlling" or `React Context` or `Redux`

## React Context - Potential Disadvantages
- Complex Setup & Management
  - In more complex apps, using React Context can lead to deeply nested or "fat" "Context Provider" components
- Performance
  - React Context is not optimized for high-frequency state changes