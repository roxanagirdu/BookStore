import React, {Component, PropTypes} from 'react';
import Payment from 'payment';
import { Row, Col, FormGroup, ControlLabel} from 'react-bootstrap';

class ShippingDetails extends Component{
  constructor({addToHistory}) {
  	super();
  	this._renderError =this._renderError.bind(this);
    this._renderSuccess = this._renderSuccess.bind(this);
    this.componentDidMount = this.componentDidMount(this);
  	this.state = { 
  		fullName:'',
  		email:'',
  		deliveryAddress:'',
  		billingAddress:'',
  		errorMessage: false,
      successMessage: false};
  }
  _renderSuccess() {
    if (this.state.successMessage) {
        return(
          <div className="alert alert-success">
            {this.state.successMessage}
          </div>
        );
    };
  }

  _renderError() {
  	if (this.state.errorMessage) {
  		return(
        <div className="alert alert-danger">
        {this.state.errorMessage}
        </div>
      );
    };
  }

  onSubmit(event) {
    event.preventDefault();
  	if (this.validateInput())
    { 
      this.props.addToHistory(this.state.fullName, this.state.email, this.state.deliveryAddress);
      this.setState({successMessage: "The order was successfuly submited"});
    }
  }

  onChange(event, attribute) {
  	var newState = this.state;
  	newState[attribute] = event.target.value;
  	this.setState(newState);
  }

  validateInput() {
  	var re = /^(([^<>()[\]\\.,;:s@]+(\.[^<>()[\]\\.,;:s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(this.state.email)) {
    	this.setState({errorMessage: "Please insert a valid email!"});
    } else {
  	 this.setState({errorMessage: false});
  	 return true;
    }
  }

  componentDidMount() {
    const { number, expiration, cvc } = this.refs;
    if(number !== undefined)
    Payment.formatCardNumber(number);
   if(expiration !== undefined)
    Payment.formatCardExpiry(expiration);
  if(cvc !== undefined)
    Payment.formatCardCVC(cvc);
  }

  render() {
  	let errorMessage = this._renderError();
    let successMessage = this._renderSuccess();
  	return ( 
  		<div>
  		 {errorMessage}
       {successMessage}
  		  <div>
      		<form onSubmit={(event)=>this.onSubmit(event)}>
      			   <Row>
                  <Col xs={ 2 }>
                    <FormGroup>
                      <ControlLabel>Full Name</ControlLabel>
                				<input type="text"
                          placeholder="Full Name"
                          required="required"
                          value={this.state.fullName}
                					onChange={(event)=>this.onChange(event, "fullName")} />
                    </FormGroup>
                  </Col>
              </Row>
              <Row>
                  <Col xs={ 2 }>
                    <FormGroup>
                      <ControlLabel>Email</ControlLabel>
      				          <input type="text"
                          placeholder="Email"
                          required="required"
                          value={this.state.email}
      					         onChange={(event)=>this.onChange(event, "email")} />
                    </FormGroup>
                  </Col>
              </Row>
              <Row>
                  <Col xs={ 2 }>
                    <FormGroup>
                      <ControlLabel>Delivery Address</ControlLabel>
                				<input type="text"
                        placeholder="Delivery Address"
                        required="required"
                        value={this.state.deliveryAddress}
                        onChange={(event)=>this.onChange(event, "deliveryAddress")} />
                      </FormGroup>
                  </Col>
              </Row>
              <Row>
                  <Col xs={ 2 }>
                    <FormGroup>
                      <ControlLabel>Billing Address</ControlLabel>
      				          <input type="text"
                        placeholder="Billing Address"
                        required="required"
                        value={this.state.billingAddress}
                        onChange={(event)=>this.onChange(event, "billingAddress")} />
                    </FormGroup>
                  </Col>
              </Row>
                <div>
                <Row>
                  <Col xs={ 5 }>
                    <FormGroup>
                      <ControlLabel>Card Number</ControlLabel>
                      <input
                        onKeyUp={ this.setCardType }
                        className="form-control"
                        type="text"
                        ref="number"
                        required="required"
                        placeholder="Card Number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={ 6 } sm={ 5 }>
                    <FormGroup>
                      <ControlLabel>Expiration</ControlLabel>
                      <input
                        className="form-control text-center"
                        type="text"
                        ref="expiration"
                        required="required"
                        placeholder="MM/YYYY"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 6 } sm={ 4 } smOffset={ 3 }>
                    <FormGroup>
                      <ControlLabel>CVC</ControlLabel>
                      <input
                        className="form-control text-center"
                        type="text"
                        required="required"
                        ref="cvc"
                        placeholder="CVC"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <div className="form-group">
      				  <button type="submit" className="btn btn-success" >Submit </button>
              </div>
      		</form>
  	    </div>
      </div> );
    };
  }
ShippingDetails.PropTypes = {
  addToHistory:PropTypes.func
}

export default ShippingDetails
