// single piece of renderable
export default function TabButton({children, onSelect, isSelected=false}) {
    //formal way
    // document.querySelector('button').addEventListener('click', () => {console.log("Hello");});

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}

// multiple
export function TabButton2(props) {
    return <li><button>{props.children}</button></li>
}