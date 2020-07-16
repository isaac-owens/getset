import React from 'react';
import { Link } from 'react-router-dom';
import { INDEX } from '../../util/route_util';

const CreateModal = () => {
  return (
    <div className="create-modal">
      <span classNam="create-modal-ex">X</span>
      <span className="create-modal-content card-styling">
        You successfully created a Hunt! To see your hunt visit  <Link to={INDEX} className="create-modal-link"> My Hunts!</Link>
      </span>
    </div>
  )
}

export default CreateModal;