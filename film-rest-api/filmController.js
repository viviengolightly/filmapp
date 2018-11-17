import mongoose from 'mongoose';


const FilmModel = mongoose.model('Films');

export function listFilms(request, response){
    FilmModel.find({}, (err, films) => {
        if(err){
            response.send(err);
        }
        response.json(films);
    });
};

export function createFilm(req, res){
    var newFilm = new FilmModel(req.body);
    newFilm.save(function(err, savedProduct){
        if(err){
            res.status(500).send({error:"Could not save film"});
        }else{
            res.status(200).send(savedProduct);
        }
    });
};

//Return film with given ID
export function readFilm(req, res){
    FilmModel.findById(req.params.filmId, function(err, film){
        if(err)
            res.send(err);
        res.json(film);
    });
};
//Update a film data with given ID.
export function updateFilm(req, res){
    FilmModel.findOneAndUpdate({_id: req.params.filmId}, req.body, {new: true}, function(err, film){
        if(err)
            res.send(err);
        res.json(film);
    });
};
// Delete a film 
export function deleteFilm(req, res){
    FilmModel.remove({
        _id: req.params.filmId
    },function(err, film){
        if(err)
            res.send(err);
        res.json({message: 'Film successfully deleted'});
    });
};

