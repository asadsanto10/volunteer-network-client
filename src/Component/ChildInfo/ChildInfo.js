import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/birdHouse.png'
const ChildInfo = (props) => {
    const { eventName, image, _id} = props.info;
    return (
        <>
            <Col md={3}>
                <div className="child-info">
                    <Link className="text-decoration-none" to={"/registration/" + _id}>
                        <img src={require(`../../images/${image}`)} alt={image} />
                        <h1>{eventName}</h1>
                    </Link>
                </div>
            </Col>
        </>
    );
};

export default ChildInfo;