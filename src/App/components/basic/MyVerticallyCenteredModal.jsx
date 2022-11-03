import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ClampLines from 'react-clamp-lines';

function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState("");
    const [messages, setMessages] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        if(title && messages) {
            e.preventDefault();
            
            const newEntry = {
                id: allEntry.length,
                title: title,
                messages: messages,
            };
    
            setAllEntry([...allEntry, newEntry]);

            setTitle('');
            setMessages('');

            props.onHide();
        } else {
            e.preventDefault();
            alert("Please fill the fields.");
        }
    }
    
    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Data
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} name={title} value={title} autoComplete="off" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description <small>(Max text length is 200 Character.)</small> </Form.Label>
                            <Form.Control as="textarea" onChange={(e) => setMessages(e.target.value)} name={messages} value={messages} autoComplete="off" rows={3} maxLength={200} />
                        </Form.Group>
                        <Modal.Footer className="p-0 pt-3">
                            {/* <Button variant="danger" className="mx-2" onClick={props.onHide}>Close</Button> */}
                            <Button variant="primary" className="mx-0" type="submit" >Update Data</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
                
            </Modal>

            <div className="row" >
                {
                    allEntry.map((currentElement) => {
                        const {id, title, messages} = currentElement;
                        return (
                            <div className="col-md-3" key={id}>
                                <div className="card card-success mb-3">
                                    <div className="card-body">
                                        <h3>{title}</h3>
                                        <ClampLines
                                            text={messages}
                                            id="custom01"
                                            lines={2}
                                            moreText="Read More"
                                            lessText="Read Less"
                                            className="btn-collapse"
                                            ellipsis="..."
                                            innerElement="span" />
                                    </div>
                                </div>
                            </div>
                        )}
                    )
                }
            </div>
        </div>
    );
}

export default MyVerticallyCenteredModal;