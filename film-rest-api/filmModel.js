import mongoose, {Schema} from 'mongoose';


const filmSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter the title of the movie',
    },
    image: {
        type: String,
    },
    genre: {
        type: String,
    },
    director: {
        type: String,
    },
    description: {
        type: Array,
    },
});

export default mongoose.model('Films', filmSchema, 'films');

