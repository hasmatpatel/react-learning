import React, { useRef, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GetDataInArray = () => {
    let cardList = [
        { id : 1, cardTitle : "Array: Card 01", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id : 2, cardTitle : "Array: Card 02", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id : 3, cardTitle : "Array: Card 03", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id : 4, cardTitle : "Array: Card 04", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id : 5, cardTitle : "Array: Card 05", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id : 6, cardTitle : "Array: Card 06", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id : 7, cardTitle : "Array: Card 07", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];

    let [cardListState, setCardListState] = useState(cardList);

    const clearData = () => {
        setCardListState([]);
    }

    const getData = () => {
        setCardListState(cardList);
    }

    return (
        <>
            <Row className="mt-5 mb-2 justify-content-center">
                {    
                    cardListState.map((datacd) => {
                        return <Col lg={3} md={4} key={datacd.id}><Card className="w-100 mb-4"><Card.Body><Card.Title>{datacd.cardTitle}</Card.Title><Card.Text>{datacd.cardDesc}</Card.Text></Card.Body></Card></Col>;
                    })
                }
            </Row>

            <Row className="mt-2 mb-5 justify-content-center">
                <Col md={12}>
                    <div className="w-100 d-block d-flex justify-content-center">
                        <Button onClick={getData} className="me-3">Get Data</Button>
                        <Button onClick={clearData} variant="danger">Clear Data</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default GetDataInArray
