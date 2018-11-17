import {listFilms, readFilm, createFilm, updateFilm, deleteFilm} from './filmController';

function filmRoutes(app){
    app.route('/films')
        .get(listFilms)
        .post(createFilm);
    app.route('/films/:filmId')
        .get(readFilm)
        .put(updateFilm)
        .delete(deleteFilm);
}

export default filmRoutes;