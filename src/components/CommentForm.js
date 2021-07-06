import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length; 
const maxLength = (len) => (val) => !(val) || (val.length <= len); 
const minLength = (len) => (val) => (val) && (val.length  >= len); 

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render() {
        return (
        <div className="row-group mt-5">
            <Button outline onClick={ this.toggleModal} >
                <span class="fas fa-pencil-alt"></span> Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody >
                    <div className="col-12 ">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col >
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control-file mt-2 col-12 col-md"
                                        >
                                        <option selected >Choose...</option>
                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" className="mt-3">Your Name</Label>
                                <Col >
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control mt-2"
                                        validators = {{ 
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".yourname"
                                        show ="touched"
                                        messages ={{ 
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group ">
                                <Label htmlFor="comment" className="mt-3">Comment</Label>
                                <Col >
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control mt-2"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:3}}>
                                    <Button type="submit" color="primary" className="mt-3">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </ModalBody>
            </Modal>
        </div>
        )
    }
}
export default CommentForm;