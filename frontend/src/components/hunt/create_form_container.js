import React from 'react';
import {connect} from 'react-redux';
import{ createHunt } from '../../actions/hunt_actions';
import CreateForm from './create_form';
import {fetchCategories} from '../../actions/category_actions'

const mSTP = state => {
  return  {
        currentUser: state.session.currentUser,
        categories: Object.values(state.categories),
        errors: state.errors.hunt,
    }
};

const mDTP = dispatch => (
    {
        createHunt: hunt => dispatch(createHunt(hunt)),
        fetchCategories: () => dispatch(fetchCategories()),
    }
);

export default connect(mSTP, mDTP)(CreateForm);