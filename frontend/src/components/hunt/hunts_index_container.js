import { connect } from 'react-redux';
import { fetchHunts } from '../../actions/hunt_actions';
import HuntsIndexPage from './hunts_index_page';

const mSTP = state => {
  return {
    
  }
}

const mDTP = dispatch => (
    {
        fetchHunts: hunts => dispatch(fetchHunts(hunts))
    }
)

export default connect(null, mDTP)(HuntsIndexPage)