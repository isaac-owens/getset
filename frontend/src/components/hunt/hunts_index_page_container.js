import { connect } from 'react-redux';
import { fetchUserHunts } from '../../actions/user_hunt_actions';
import HuntsIndexPage from './hunts_index_page';

const mSTP = state => {
  return {
    
  }
}

const mDTP = dispatch => (
    {
      fetchUserHunts: hunts => dispatch(fetchUserHunts(hunts))
    }
)

export default connect(null, mDTP)(HuntsIndexPage)