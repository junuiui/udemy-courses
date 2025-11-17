import { useState } from "react";

import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {

    // ============== INPUTS

    const [inputs, setInputs] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = inputs.duration >= 1;

    function handleInputs(inputIdentifier, newValue) {
        setInputs(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        });
    }

    // ============== INPUTS END

    return (
        <>
            <UserInput onChange={handleInputs} inputs={inputs} />
            {!inputIsValid && <p>Please enter valid input data</p>}
            {inputIsValid && <Results inputs={inputs}/>}
        </>

    );
}

export default App
