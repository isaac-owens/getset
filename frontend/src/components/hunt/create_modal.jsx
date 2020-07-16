import React from 'react';
import { Link } from 'react-router-dom';
import { INDEX } from '../../util/route_util';

const CreateModal = () => {
  return (
    <div className="create-modal">
      <div className="create-modal-content">
        You successfully created a Hunt! To see your hunt visit <Link to={INDEX}>My Hunts</Link>
      </div>
    </div>
  )
}

export default CreateModal;