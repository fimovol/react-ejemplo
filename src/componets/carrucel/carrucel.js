import React, { useState } from 'react';


import Toast from 'react-bootstrap/Toast';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const Guardandopendejadas=()=>
        <>
            <style type="text/css">
                {`
                .btn-flat {
                background-color: red;
                color: white;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>

            <Button variant="flat" size="xl">
                flat button
            </Button>
        </>

function App({value}){
    return(
        value.map((iterador) => 
            <>
            <Container>
                <Row>
                    <Col>
                    <Button >
                        {iterador}
                    </Button>
                    </Col>
                    <Col>
                    <Button >
                    {iterador}
                    </Button>
                    </Col>
                    <Col>
                    <Button >
                    {iterador}
                    </Button>
                    </Col>
                    <Col>
                    <Button >
                    {iterador}
                    </Button>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Button >
                    {iterador}
                    </Button>
                    </Col><Col>
                    <Button >
                    {iterador}
                    </Button>
                    </Col><Col>
                    <Button >
                    {iterador}
                    </Button>
                    </Col>
                </Row>
            </Container>
            <Guardandopendejadas/>
        </>
        )
        
    )
}

export default App