export default function UserInput({onChange, inputs}) {
    return (<section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required
                    value={inputs.initialInvestment}
                    onChange={(e) => onChange("initialInvestment", e.target.value)}></input>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                    value={inputs.annualInvestment}
                    onChange={(e) => onChange("annualInvestment", e.target.value)}></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required
                    value={inputs.expectedReturn}
                    onChange={(e) => onChange("expectedReturn", e.target.value)}></input>
            </p>
            <p>
                <label>Duration Investment</label>
                <input type="number" required
                    value={inputs.duration}
                    onChange={(e) => onChange("duration", e.target.value)}></input>
            </p>
        </div>
    </section>
    );
}