import {connect} from 'react-redux';
import Category from './category';
import { getChallangesByCategory } from '../../util/selector';

const mSTP = (state, ownProps) =>{
    // const category = ownProps.challenge.category ? state.categories[ownProps.challenge.category] : {name: "No Category", _id: "asdfasdfdasf"};
  return  {
        
    }
};

const mDTP = dispatch =>(
    {

    }
);

export default connect(null, null)(Category);