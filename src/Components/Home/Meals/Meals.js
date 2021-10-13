import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Meals/Meals.css';
import { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
//import Popup from '../../Popup/Popup';

const Meals = (props) =>{
   //strInstructions  strYoutube

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Col lg={4} md={4}>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={props.data.strMealThumb} />
                    <Card.Title>Mean Name : {props.data.strMeal}</Card.Title>
                    <Card.Text>Category : {props.data.strCategory} </Card.Text>
                    <Card.Text>Area : {props.data.strArea} </Card.Text>
                   
                   
                    <Button variant="outline-success" size="sm" onClick={handleShow}>Show recipie</Button>
                    <Modal show={show} onHide={handleClose} className="modal">
                        <Modal.Header closeButton>
                        <Modal.Title>{props.data.strMeal}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Reciepie :  {props.data.strInstructions}</Modal.Body>
                        <Modal.Body> <Button variant="outline-success"><a href ={props.data.strYoutube} ></a>Watch it on Youtube</Button></Modal.Body>
                        <Modal.Footer>
                        <Button variant="outline-danger"size="sm"  onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                   
                    
                    
                </Card.Body>
            </Card>
            
        </Col>
    )
} 

export default Meals;