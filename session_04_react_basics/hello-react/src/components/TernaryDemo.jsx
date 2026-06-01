import { useState } from "react";

function TernaryDemo (){
    const LoggedIn = false;
    const score = 9.01;
    const stock = 3;
    return(
        <div style={{padding : "20px" }}>
            {
                LoggedIn &&(
                    <span>
                        Online 🟢!
                    </span>
                )   
            }
            {
                !LoggedIn &&(
                    <span>
                        Offline 🔴!
                    </span>
                )
            }
            <p>
                {stock == 0 ? "Stock unavailable" : "Stock available"}
            </p>
        </div>
    );
}

export default TernaryDemo;