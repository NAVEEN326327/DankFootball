import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';

class Landing extends Component {
    render() {
        return (
            <div>

                <Container >
                    <Row md={2} >

                        <Col md={3}>
                            
                            <h4>Recommended</h4>
                            <Card>
                                <CardImg top width="100%" src="#" alt="Card image cap" />
                                <CardBody>

                                    <CardTitle>Why Brian Clough is the GOAT{}</CardTitle>
                                    <CardSubtitle>Card subtitle{}</CardSubtitle>
                                    <CardText>So lorem ipsum sucks because it is what everyone and their grandpa used to use and so should be replaced by random...................{}</CardText>

                                </CardBody>
                            </Card>


                        </Col>

                        <Col md={3}>
                            <h4>Popular right now</h4>
                            <Card>
                                <CardImg top width="100%" src="#" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>So lorem ipsum sucks because it is what everyone and their grandpa used to use and so should be replaced by random...................</CardText>

                                </CardBody>
                            </Card>



                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }
}
export default Landing;