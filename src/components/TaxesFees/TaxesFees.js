import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class TaxesFees extends Component {
    render() {
        return (
            <div>
            <Row className="show-grid">
                    <Col md={6}>Est. on taxes & fees(Base on 94085) </Col>
                    <Col md={6}>{`$${this.props.taxes}`}</Col>
                </Row>
            </div>
        )
    }
}
