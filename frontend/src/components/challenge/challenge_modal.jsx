import React from 'react';

class ChallengeModal extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
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