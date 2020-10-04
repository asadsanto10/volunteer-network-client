import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import './EventTask.scss'
import ShowEvent from './ShowEvent';
const EventTask = () => {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/register-person')
            .then(response => response.json())
            .then(data => setEvent(data))
    }, [])
    
    return (
        <div className="tesk_event">
            <Container>
                <Row>
                    {
                        event.map(eventInfo => <ShowEvent key={eventInfo._id} eventData = {eventInfo}></ShowEvent>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default EventTask;