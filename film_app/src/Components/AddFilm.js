import React from 'react';
import '../Styles/AddFilm.css';

function validate(title, description, director, genre, image){
    return {
        title: title.length === 0,
        description: description.length === 0,
        director: director.length === 0,
        genre: genre.length === 0,
        image: image.length === 0
    };
}

class AddFilm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            description: '',
            director:'',
            genre:'',
            image:'',
            touched:{
                title:false,
                description:false,
                director:false,
                genre:false,
                image:false
            }
        };
        
        this.handleA = this.handleA.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    // Handel the process of POSTing the data to db, when the 'Add' button is added.
    handleA = (event) =>{
        if(!this.canBeSubmitted()){
            event.preventDefault();
            
        }
        this.props.addMovie(this.state.title,this.state.description,this.state.genre, this.state.director, this.state.image);
            console.log("Clicked add movie");
        
    }
    //Checks if the form can be submitted, returns true or false.
    canBeSubmitted(){
        const errors = validate(this.state.title, this.state.description, this.state.director, this.state.genre, this.state.image);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }
    // Set the states according to the input from the user.
    handelChange = (event) =>{
        this.setState({
             [event.target.name] : event.target.value
        });
    }
    //Checks if the field was touched. 
    handleBlur=(field)=>(event)=>{
        this.setState({
            touched:{...this.state.touched, [field]: true},
        });
    }

    render(){
        const errors = validate(this.state.title, this.state.description, this.state.director, this.state.genre, this.state.image);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        //Checks if the red error mark should be displayed. 
        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow: false;

        }
        return(
            // Form to add new film 
            <div className="addFilm">
                <h2 className="headerAddMovie">ADD MOVIE </h2>
                <form className="form" onSubmit={this.handleA}>
                    <label className="lbl"> Film Title: </label>
                        <input  
                            className={shouldMarkError('title') ? "error" : ""} 
                            type="text" 
                            placeholder="TITLE" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handelChange}
                            onBlur={this.handleBlur('title')}
                        >
                        </input>
                    
                    <label className="lbl"> Film Description: </label>
                        <input 
                            className={shouldMarkError('description') ? "error" : ""} 
                            type="text" placeholder="DESCRIPTION" name="description" 
                            value={this.state.description} 
                            onChange={this.handelChange}
                            onBlur={this.handleBlur('description')}
                        >
                        </input>
                    
                    <label className="lbl">Director: </label>
                        <input 
                            className={shouldMarkError('director') ? "error" : ""} 
                            type="text" 
                            placeholder="DIRECTOR" 
                            name="director" 
                            value={this.state.director} 
                            onChange={this.handelChange}
                            onBlur={this.handleBlur('director')}
                        >
                        </input>
                    
                    <label className="lbl">Genre:  </label>
                        <input 
                            className={shouldMarkError('genre') ? "error" : ""} 
                            type="text" 
                            placeholder="GENRE" 
                            name="genre" 
                            value={this.state.genre} 
                            onChange={this.handelChange}
                            onBlur={this.handleBlur('genre')}
                        >
                        </input>
                   
                    <label className="lbl">Image link:</label>
                        <input 
                            className={shouldMarkError('image') ? "error" : ""} 
                            type="text" 
                            placeholder="IMAGE LINK" 
                            name="image" 
                            value={this.state.image} 
                            onChange={this.handelChange}
                            onBlur={this.handleBlur('image')}
                        >
                        </input>
                    
                    <input 
                        className="addBtn"
                        type="submit" 
                        value="ADD FILM" 
                        disabled={isDisabled}
                    >
                    </input>
                </form>
            </div>
        );
    }

};

export default AddFilm;