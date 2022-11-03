import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import LoaderComp from "./LoaderComp";

const ListSection = () => {
    const [getFetchData, setGetFetchData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getFetch = async () => {
        try {
            setLoading(false);
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6');
            const data = await response.json();
            setGetFetchData(data);
        } catch (error) {
            console.log("fffff"+ error);
        }
    }
    
    useEffect(() => {
        getFetch();
    }, []);

    if(loading) {
        return <LoaderComp />;
    }

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // const [show, setShow] = useState(false);
    // const target = useRef(null);

    return (
        <>
            <section className="fetch-section">
                <div className="container">
                    
                    <div className="title-new-dv">
                        <h2>FETCH API LISTING</h2>
                    </div>

                    <Row>
                        {
                            getFetchData.map((currentElement) => {
                                const { id, title, url, thumbnailUrl } = currentElement;
                                return (
                                    <Col lg={4} md={4} key={id}>
                                        <div className="fetch-card">
                                            <div className="fetch-card-inner">
                                                <div className="img-dv">
                                                    <img src={url} className="img-fluid img-full" alt="img" />
                                                    <OverlayTrigger
                                                        key={currentElement}
                                                        placement="top"
                                                        delay={{ show: 200, hide: 300 }}
                                                        overlay={
                                                            <Tooltip id={`tooltip-${id}`}>
                                                            Tooltip on <strong>{id}</strong>.
                                                            </Tooltip>
                                                        } >
                                                        <div className="img-thumb-dv">
                                                            <img src={thumbnailUrl} className="img-fluid thumbnail-img" alt="img" />
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="content-dv">
                                                    <h3>{capitalizeFirst(title)}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                        
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ListSection;
