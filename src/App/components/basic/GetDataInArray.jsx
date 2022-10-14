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
        
        let NoDataElement = document.getElementById("NoDataID");
        NoDataElement.classList.remove("d-none");
    }

    const getData = () => {
        setCardListState(cardList);
        
        let NoDataElement = document.getElementById("NoDataID");
        NoDataElement.classList.add("d-none");
    }

    const RemoveDataArrayOne = (id) => {
        const NewArrayOne = cardListState.filter((currentElement) => {
            return currentElement.id != id;
        });

        setCardListState(NewArrayOne);

        if (NewArrayOne.length || 0) {
            let NoDataElement = document.getElementById("NoDataID");
            NoDataElement.classList.add("d-none");
        } else {
            let NoDataElement = document.getElementById("NoDataID");
            NoDataElement.classList.remove("d-none");
        }
    }

    return (
        <>
            <Row className="mt-5 mb-1 justify-content-center card-root-array">
                {    
                    cardListState.map((datacd) => {
                        return <Col lg={3} md={4} key={datacd.id}><Card className="w-100 mb-4"><Card.Body><Card.Title>{datacd.cardTitle}</Card.Title><Card.Text>{datacd.cardDesc}</Card.Text><Button onClick={() => RemoveDataArrayOne(datacd.id)} variant="danger" size="sm" className="btn-remove me-2"><i className="fa-sharp fa-solid fa-xmark"></i></Button></Card.Body></Card></Col>;
                    })
                }
            </Row>

            <Row className="justify-content-center card-root-array d-none" id="NoDataID">
                <Col>
                    <div className="alert alert-danger alert-view-div text-center">
                        <div> <img src="./images/no-results-found.png" alt="no data" className="img-fluid" loading="lazy" /> </div>
                        <p>No Data Found</p>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center mb-4">
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
