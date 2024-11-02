import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCamera, faPen, faEllipsis } from '@fortawesome/free-solid-svg-icons';

function WhatsappStatus() {
  return (
    <div>
      <div className='container'>
        <header>
          <button className="menu">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
            <h1>Atualizações</h1>

          <div className="search-bar">
              <input type="text" placeholder="Pesquisa" className="search-input" />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </div>
        </header>
        <div>
          <h2>Status</h2>
       </div>
        <main>
          <div className="status-container">
            <button className='status-button'></button>
          </div>

          <div className="status-update">
            <header>
              <h3>Meu status</h3>
              <p>Adicionar ao meu status</p>
            </header>
          
            <div className="status-buttons">
              <button className="camera-button">
                <FontAwesomeIcon icon={faCamera} className="camera-icon" />
              </button>
              <button className="pen-button">
                <FontAwesomeIcon icon={faPen} className="pen-icon" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default WhatsappStatus;