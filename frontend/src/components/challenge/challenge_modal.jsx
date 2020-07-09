import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  
  return (
    promiseInProgress && (
      <div className="test-modal">
        <Loader type="Grid" height="160px" width="200px" color="#fff"/>
      </div>
    )
  );
};

export class ChallengeModal extends React.Component {

  render() {
    let { hunt_name, score } = this.props.challengeResult;
    let redEx = <FontAwesomeIcon icon={faTimesCircle} size="2x" />
    return (
        <div className="challenge-modal">
            <div className="challenge-modal-content card-styling">
                <span className="modal-ex" onClick={this.props.closeModal}>
                    {redEx}
                </span>
                <h1 className="challenge-modal-header">Challenge Completed!</h1>
                <div className='challenge-modal-title'>{hunt_name}</div>
                <div className="challenge-modal-score">Your Score: {score}</div>
            </div>
        </div>
    )
  }
};

// export default ChallengeModal;