
import { CORE_CONCEPTS } from "./data.js"
import Header from './components/Header.jsx';
import { CoreConcepts, CoreConcepts2 } from "./components/CoreComponents.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
    function handleSelect(selectedButton) {
        // selectedButton => which Button? 'Components', JSX, Props, State
        console.log(selectedButton + " Selected!");
    }

    return (
        <div>
            {/* self closing, must have / at the end */}
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcepts {...CORE_CONCEPTS[1]}
                        />
                        <CoreConcepts2 {...CORE_CONCEPTS[2]}
                        />
                        <CoreConcepts2 {...CORE_CONCEPTS[3]}
                        />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;
