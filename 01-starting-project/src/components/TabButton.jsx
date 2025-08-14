// single piece of renderable
export default function TabButton({children, onSelect}) {
    //formal way
    // document.querySelector('button').addEventListener('click', () => {console.log("Hello");});

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

// multiple
export function TabButton2(props) {
    return <li><button>{props.children}</button></li>
}