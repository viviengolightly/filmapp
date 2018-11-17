import React from 'react';
import '../Styles/InfoDisplay.css';

const InfoDisplay = ({title, description, genre, director, image, closePopUp}) =>{

    const handelClose = (event) =>{
        event.preventDefault();
        closePopUp();

    }
    return(
        <div className="popup">
            <div className="popup_inner">
                <button className="closeBtn" onClick={handelClose}>X</button>
                <p>{title}</p>
                <p>{description}</p>
                <p>{genre}</p>
                <p>{director}</p>
                <img src={image} />
            </div>
        </div>
    );
};

export default InfoDisplay;