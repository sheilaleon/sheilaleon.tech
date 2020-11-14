import React, { useState } from 'react';
import { Link } from 'gatsby';

const Menu = () => {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  <div
    className="w-auto h-auto m-4 absolute py-4 pt-20 pb-4 rounded-lg shadow-xl top-0 left-0 right-0 z-40"
    style={{ backgroundColor: 'var(--colour-menu)' }}
    showModal={showModal}
  >
    <div className="absolute top-0 right-0 pr-8">
      <button type="button" onClick={handleCloseModal}>
        x
      </button>
    </div>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>;
};

export default Menu;
