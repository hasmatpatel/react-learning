import React, { useRef, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import GetDataInArray from "../components/basic/GetDataInArray";
import GetDataInObject from "../components/basic/GetDataInObject";

const HowItWorks = () => {
    /* Toggle Button */ 
    const [changeTitle, setChangeTitle] = useState("ON");
    const changeCardDetails = () => {
        let val = changeTitle;
        if (val === "ON") {
            setChangeTitle("OFF");
        } else {
            setChangeTitle("ON");
        }
    }
    /* End of Toggle Button */ 

    return (
        <>
            <section className="section mb-4">
                <div className="container">
                    <div className={`alert alert-primary d-flex justify-content-between ${changeTitle}`}>
                        <h1 className="mb-0">useState </h1>
                        <Button className={`mw-100 ${changeTitle}`} onClick={changeCardDetails} variant="success">{changeTitle}</Button>
                    </div>
                </div>
            </section>

            <div className={`middle-area-opt-dv ${changeTitle}`}>
                <section className="section">
                    <div className="container">
                        <GetDataInArray />
                        
                        <hr />
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <GetDataInObject />

                        
                    </div>
                </section>
            </div>

        </>
    );
};

export default HowItWorks;