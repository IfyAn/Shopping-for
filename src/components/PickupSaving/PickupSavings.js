import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

var style={
    pickupSavings:{
        textDecoration:'underline'
    },
    totalSavings:{
        color:'red',
        fontWeight:800
    }
};

export default class PickupSavings extends Component {
    render() {
        const tooltip=(
              <Tooltip id='tooltip'>
            <p>Pick up your orders in the store help you cut cost & we will pass the saving to you</p>
        </Tooltip>
        );
     return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                    <OverlayTrigger placement='buttom' overlay={ tooltip}>
                        <div style={style.pickupSavings}>Pickup Savings</div>
                    </OverlayTrigger>
                    </Col>
                    <Col style={style.totalSavings} md={6}>{`$${this.props.price}`}</Col>
                </Row>
            </div>
        )
    }
}
