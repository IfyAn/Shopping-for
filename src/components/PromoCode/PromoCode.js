import React, { Component } from 'react'
import {  Button,
     Collapse,
      well,
       Row,
        Col, Form, FormGroup, controlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleChange } from '../../actions/promoCodeActions.js'

 class PromoCodeDiscount extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false,
            value:' '
        };
    }

    handleChange=e=>{
        this.props.handleChange(e)
    }

    render() {
        return (
            <div>
            <button
                className='promo-code-button'
                bsStyle='link'
                onClick={()=>this.setState({open:!this.state.open})}
                >
                    {this.state.open===false ? `Apply` : `Hide`} Promo Code
                    {this.state.open===false ? `+` : `-`}
                </button>
                <Collapse in={this.state.open}>
                    <div>
                        <well>
                                <Row className='show-grid'>
                                        <Col md={12}>
                                        <Form>
                                            <FormGroup controlId='formInlineName'>
                                                <controlLabel>Promo Code</controlLabel>
                                                <FormControl
                                                type='text'
                                                placeholder='Enter Promo code'
                                                value={this.props.promoCode}
                                                onChange={this.youChange}
                                                 />
                                            </FormGroup>
                                            <Button
                                            block
                                            bsStyle='success'
                                            className='btn-round'
                                            disabled={this.props.isDisabled}
                                            onClick={this.props.giveDiscount}
                                            >
                                                Apply Now
                                            </Button>
                                        </Form>
                                         </Col>
                                </Row>
                        </well>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    promoCode:state.promoCode.value
})

export default connect (mapStateToProps, {handleChange})(PromoCodeDiscount)
