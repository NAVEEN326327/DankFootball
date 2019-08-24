import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';


const Example = (props) => {
    return (
        <div>
            <container>
                <Row>
                    <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                </CardBody>
      </Card>
      </Col>
      </Row>
      </container>  
    </div >
  );
};

export default Example;