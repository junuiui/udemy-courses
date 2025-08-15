import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from "./data.js"
import Header from './components/Header.jsx';
import { CoreConcepts, CoreConcepts2 } from "./components/CoreComponents.jsx";
import TabButton from "./components/TabButton.jsx";

// Only executes once!
function App() {
    // return two elements
    // param = initial state value (sotred by react)
    // first = current state value
    // second = state updating function
    let [selectedTopic, setSelectedTopic] = useState(null); // must call it on top level

    function handleSelect(selectedButton) {
        // selectedButton => which Button? 'Components', JSX, Props, State
        // console.log(selectedButton + " Selected!");
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = <p>Please select</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            {/* self closing, must have / at the end */}
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    {/* {['Hello', 'World']} */}
                    <ul>
                        {CORE_CONCEPTS.map(item => <CoreConcepts key={item.title} {...item} />)}
                        {/* <CoreConcepts
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcepts {...CORE_CONCEPTS[1]}
                        />
                        <CoreConcepts2 {...CORE_CONCEPTS[2]}
                        />
                        <CoreConcepts2 {...CORE_CONCEPTS[3]}
                        /> */}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
