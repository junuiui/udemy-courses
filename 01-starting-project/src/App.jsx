import reactImg from './assets/react-core-concepts.png'

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

/**
 * Generate random number
 * @param {*} max 
 * @returns 
 */
function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}

function Header() {

    const description = reactDescription[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                <b>{description}</b> React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function Intro(){
    return (<h2>Time to get started!</h2>);
}

function App() {
    return (
        <div>
            {/* self closing, must have / at the end */}
            <Header/>
            <main>
                <Intro/>
            </main>
        </div>
    );
}

export default App;
