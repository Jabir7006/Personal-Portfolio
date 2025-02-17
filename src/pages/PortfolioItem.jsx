import React, { useState } from "react";
import Close from "../assets/close.svg";

function PortfolioItem({ img, title, details }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content" data-aos="zoom-in" data-aos-duration="600">
            <img src={Close} alt="" className="modal__close" onClick={toggleModal}/>

            <h3 className="modal__title"></h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc, index }) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__ico">{icon}</span>
                  
                    <div>
                      <span className="item__title">{title}</span>
                      <a href={desc.startsWith('http') && desc } target="_blank" rel="noreferrer" className={`item__details ${desc.startsWith('http') && 'item__link'}`}>{desc}</a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="" className="modal__img"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;
