import React, { useState } from "react";

import { Row, Col, Button, Card, Collapse } from 'react-bootstrap';
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const GetDataInObject = () => {
    const [open, setOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    let [cardListObject, setCardListObject] = useState(
        {id : 1, cardTitle : "Object Card 01", cardDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    );

    let StaticDataObject = () => {
        console.log(cardListObject);
        setCardListObject({...cardListObject, cardTitle:"Object Card Updated."});
    }

    // {console.log([newEntry])}

    return (
        <>
            <Row className="mt-4 mb-2 justify-content-center">
                <Col lg={6} md={6} key={cardListObject.id}>
                    <Card className="w-100 mb-4">
                        <Card.Body>
                            <Card.Title>{cardListObject.cardTitle}</Card.Title>
                            <Card.Text>{cardListObject.cardDesc}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={() => setModalShow(true)} variant="primary" className="me-2"> Update Data </Button>
                            <Button onClick={StaticDataObject} className="me-2">Update Static Data</Button>
                            <Button onClick={() => setOpen(!open)} aria-expanded={open}> Open Code </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            
            <Collapse in={open}>
                <div>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="w-100 img-div">
                                <img className="img-fluid" src={"./images/Code/object01.png"} loading="lazy" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Collapse>
        </>
    )
}

export default GetDataInObject;