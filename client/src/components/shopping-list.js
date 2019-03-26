import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import { fetchData, deleteItem } from '../actions/itemActions'

import PropTypes from 'prop-types';



class ShoppingList extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { items } = this.props.data;
    const { deleteItem } = this.props;
    return (
      <Container>

        <ListGroup
          style={{ paddingBottom: '1rem' }}
        >
          <TransitionGroup className="shopping-list">
            {
              items.map(({ _id, name }) => (
                <CSSTransition 
                  key={ _id } 
                  timeout={500}
                  classNames="fade"  
                >
                  <ListGroupItem>
                    <Button
                      onClick={ () => deleteItem(_id) }
                      className="remove-btn"
                      color="danger"
                      size="small"
                    >
                      &times;
                    </Button>
                    { name }
                  </ListGroupItem>
                </CSSTransition>
              ) )
            }
          </TransitionGroup>
        </ListGroup>

      </Container>
    )
  }
}



ShoppingList.propTypes = {
  data: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    deleteItem: id => dispatch(deleteItem(id))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(ShoppingList)