import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer
        style={{
            background: "#20B2AA",
            width: "100%",
            position: "relative",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
        }}
        >
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; To-Do App</Col>
                </Row>
            </Container>
    </footer>
  )
}

export default Footer