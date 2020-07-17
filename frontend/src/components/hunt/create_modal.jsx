import React from 'react';
import { Link } from 'react-router-dom';
import { INDEX } from '../../util/route_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CreateModal = () => {
  let redEx = <FontAwesomeIcon icon={faTimesCircle} size="2x" />

  return (
    <div className="create-modal">
      <span className="create-modal-ex">{redEx}</span>
      <span className="create-modal-content card-styling">
        You successfully created a Hunt! To see your hunt visit  <Link to={INDEX} className="create-modal-link"> My Hunts!</Link>
      </span>
    </div>
  )
}

export default CreateModal;