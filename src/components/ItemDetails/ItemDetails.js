import React, { Component } from 'react'
import {  Button, Collapse, well, Row, Col } from 'react-bootstrap'
// import Media from 'react-bootstrap/Media'

export default class ItemDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false
        };
    }

    render() {
        return (
            <div>
                <button
                className='item-details-button'
                bsStyle='link'
                onClick={()=>this.setState({open:!this.state.open})}
                >
                    {this.state.open===false ? `See` : `Hide`} item details
                    {this.state.open===false ? `+` : `-`}
                </button>
                <Collapse in={this.state.open}>
                    <div>
                        <well>
                            <div>
                                <div className='left'>
                                    <img
                                    width={100}
                                    height={100}
                                    alt='thumbnail'
                                    src='https://i5.walmartimages.com/asr/a6d6ad96-c376-49c6-bb42-1340c4af5520_1.
                                    e58e07905ee6e74ff256c80e3fb1317c.jpeg?odnWidth=undefined&odnHeight=
                                    undefined&odnBg=ffffff'
                                    />
                                </div>
                                <div className="body">
                                    <p>ESSENTIALS BY OFM 3085 Racing style leather gaming chair, Red</p>
                                    <Row className='show-grid'>
                                        <Col md={6}>
                                            <strong>{`$${this.props.price}`}</strong>
                                            <br />
                                            <strong className='price-strike'> {`$${this.props.price}`} </strong>
                                        </Col>
                                        <Col md={6}> Qty:1</Col>
                                    </Row>
                                </div>
                            </div>
                        </well>
                    </div>
                </Collapse>
            </div>
        )
    }
}
