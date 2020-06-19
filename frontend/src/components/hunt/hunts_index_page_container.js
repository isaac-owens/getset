import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchHunts } from '../../actions/hunt_actions';
import HuntsIndexPage from './hunts_index_page';

// const mSTP = state => {
//   return {
//     hunts: state.something.hunts
//   }
// }

// const mDTP = dispatch => (
//     {
//         fetchHunts: hunts => dispatch(fetchHunts(hunts))
//     }
// )

export default connect(null, null)(HuntsIndexPage);