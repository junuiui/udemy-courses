JavaScript
==
## JavaScript Can be Executed in many Environmnets
- In the `Browser` (as part of websites)
    - `JS` code can be included in any website
    - The code then executes inside the browser (i.e., on the machine of the website visitor)
- On any `Computer` (e.g., Server-side code)
    - `Node.js` or `Deno`, `JS` code can be executed outside of the browser, too
    - The code then executes directly on the machine
- On `Mobile Device` (via embedded websites)
    - With extra technologies like `Capacitor` or `React Native`, you can build mobile apps based on `JS`
    - The code then executes on the mobile device

## Adding JS Code To A Website
- Between `<script>` Tags
    ```
    <script> alert('Hello')</script>
    ```
    - Can quickly lead to unmaintainable & complex HTML file
    - Typically only used for very short scripts

- Via `<script>` Import
    ```
    <script src="script.js"></script>
    ```
    - Separates HTML & JS code
    - Maintaining complex JS-powered apps becomes easier

## Different Types of Values
- String
- Number
- Boolean
- Null 
    - Explicitly assigned by developer (reset value)
- undefined
    - Default if no value was assigned yet
