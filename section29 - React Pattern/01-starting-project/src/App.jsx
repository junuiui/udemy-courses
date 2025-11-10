import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className='accordion'>
        {/* First */ }
        <AccordionItem title="We got 20 years of experience" className="accordion-item" id="first">
          <article>
            <p>
              You can&apos;t go wrong with us!
            </p>
          </article>
        </AccordionItem>

        {/* Second */ }
        <AccordionItem title="We Are..." className="accordion-item" id="second">
          <article>
            <p>
              Second...
            </p>
          </article>
        </AccordionItem>

      </Accordion>
    </section>
  </main>;
}

export default App;
