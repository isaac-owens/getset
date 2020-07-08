import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

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
  constructor(props) {
    super(props);
  };

  render() {
    let { name, score } = this.props.challengeResult;
    return (
        <div className="challenge-modal">
            <div className="challenge-modal-content card-styling">
                <h1 className="challenge-modal-header">Challenge Completed!</h1>
                <div className='challenge-modal-title'>Challenge Title</div>
                <div className="challenge-modal-score">Your Score: 100%</div>
            </div>
        </div>
    )
  }
};

export default ChallengeModal;