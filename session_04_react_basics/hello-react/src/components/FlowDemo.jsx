import { useState } from "react";
function FlowDemo(){
    console.log("🔄 Component render!");
    const[step, setStep] = useState(1);
    return(
        <div style={{padding : "20px"}}>
            <h2>Activity Flow</h2>
            <p>Current step: {step}</p>
            <button style={{margin : "10px"}} onClick={() => setStep (step + 1)}>
                Next step →
            </button>
            <button style={{margin : "10px"}} onClick={() => setStep(1)}>
                Reset
            </button>
            <div style={{padding : "20px", marginTop : "10px", background : "#ffffff"}}>
                {step === 1 && <p>First step: Hello!</p>}
                {step === 2 && <p>Second step: Learning React</p>}
                {step === 3 && <p>Third step: Understanding useState</p>}
                {step === 4 && <p>Fourth step: Completed!</p>}
                {step === 5 && <p>No more steps, please reset</p>}
            </div>
        </div>
    );
}

export default FlowDemo;