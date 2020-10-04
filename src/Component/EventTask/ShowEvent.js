import React from 'react';
import { Button, Col } from 'react-bootstrap';

const ShowEvent = (props) => {
    const { Organize, date } = props.eventData;
    return (
        <>
            <Col md={6}>
                <div className="card">
                    <img src="" alt="" />
                    <h3>{Organize}</h3>
                    <h3>{date}</h3>
                    <Button className="btn btn-primary">Cancel</Button>
                </div>
            </Col> 
        </>
    );
};

export default ShowEvent;