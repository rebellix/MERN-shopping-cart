import React, {
  Component
} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addItem } from '../actions/itemActions'



class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    }
    this.props.addItem(newItem);
    this.toggle();
  }

  render() {
    const placeholder = 'Add shopping item';

    return (
      <div>
        <Button
          onClick={ this.toggle }
          color="dark"
          style={{ margin: '1rem' }}
        >
          Add Item
        </Button>

        <Modal
          isOpen={ this.state.modal }
          toggle={ this.toggle }
        >
          <ModalHeader toggle={ this.toggle }>
            Add to Shopping List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.onSubmit }>
              <FormGroup>
                <Label htmlFor="item">Item</Label>
                <Input 
                  type="text"
                  name="name"
                  id="item"
                  placeholder={ placeholder }
                  onChange={ this.onChange }
                />
              </FormGroup>
              <Button 
                color="dark" 
                type="submit"
                block
              >
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}



ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(ItemModal)