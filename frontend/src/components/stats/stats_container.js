import { connect } from 'react-redux';
import Stats from './stats';
import { fetchMyStats } from '../../actions/challenge_actions';

const mSTP = (state)=>({
    userStats: Object.values(state.stats),
});

const mDTP = (dispatch)=>({
    fetchMyStats: () => dispatch(fetchMyStats())
});

export default connect(mSTP, mDTP )(Stats);