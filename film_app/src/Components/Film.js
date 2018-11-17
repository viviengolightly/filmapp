import React from 'react';


const Film = ({film, title, description, genre, director, handleDelete}) => {
    const handleClick = (event) =>{
        event.preventDefault();
        handleDelete(film._id);
    };

    return(
        <li className="film">
            <div className="title">
                {title}
            </div>
            <div className="description">
                {description}
            </div>
            <div className="genre">
                {genre}
            </div>
            <div className="director">
                {director}
            </div>
            <div>
                <button
                onClick={handleClick}
                >Delete</button>
            </div>
        </li>
    );
};

export default Film;