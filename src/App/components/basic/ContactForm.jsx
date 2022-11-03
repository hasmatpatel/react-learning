import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ContactForm = () => {
    const [userContactDetails, setUserContactDetails] = useState({
        name: "",
        email: "",
        phone: "",
        messages: "",
    });

    const [userRecords, setUserRecords] = useState([]);

    const HandleEvent = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name,value);

        setUserContactDetails({ ...userContactDetails, [name]: value });
    }

    const submitForm = (e) => {
        if (userContactDetails.name && userContactDetails.email && userContactDetails.phone && userContactDetails.messages) {
            e.preventDefault();

            const newUserRecords = { ...userContactDetails, id: new Date().getTime().toString() };
            setUserRecords([...userRecords, newUserRecords]);
            setUserContactDetails({ name: "", email: "", phone: "", messages: "" });
        } else {
            e.preventDefault();
            alert("Please fill the fields.");
        }
    };

    // const [allEntry, setAllEntry] = useState([]);

    // const submitForm = (e) => {
    //     if (title && messages) {
    //         e.preventDefault();

    //         const newEntry = {
    //             id: allEntry.length,
    //             title: title,
    //             messages: messages,
    //         };

    //         setAllEntry([...allEntry, newEntry]);

    //         setTitle('');
    //         setMessages('');
    //     } else {
    //         e.preventDefault();
    //         alert("Please fill the fields.");
    //     }
    // }

    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count>0){
            document.title = `Count ${count}`;
        } else {
            document.title = `Count `;
        }
        console.log(`Count ${count}`);
    });

    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <Row>
                        <Col lg={6} md={6}>
                            <div>
                                <LazyLoadImage
                                    src="./images/contact-us.png"
                                    effect="blur"
                                    loading="lazy"
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <Card className="contact-form-card">
                                <Card.Body>
                                    <Form onSubmit={submitForm}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" onChange={HandleEvent} name="name" value={userContactDetails.name} autoComplete="off" autoFocus />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" onChange={HandleEvent} name="email" value={userContactDetails.email} autoComplete="off" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" onChange={HandleEvent} name="phone" value={userContactDetails.phone} autoComplete="off" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Messages <small>(Max text length is 200 Character.)</small> </Form.Label>
                                            <Form.Control as="textarea" onChange={HandleEvent} name="messages" value={userContactDetails.messages} autoComplete="off" rows={3} maxLength={200} />
                                        </Form.Group>

                                        <div className="d-flex">
                                            <Button variant="primary" className="mx-0" type="submit" >Submit</Button>
                                            <Button variant="primary" className="mx-2" onClick={() => setCount(count + 1)}>Count 😉<span className="mx-2">{count}</span></Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="result-card-dv">
                                        {
                                            userRecords.map((currentElement) => {
                                                const { name, email, phone, messages } = currentElement;
                                                return (
                                                    <div >
                                                        <p><strong>Name:</strong> {name}</p>
                                                        <p><strong>Email:</strong> {email}</p>
                                                        <p><strong>Phone Number:</strong> {phone}</p>
                                                        <p><strong>Messages:</strong> {messages}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ContactForm
