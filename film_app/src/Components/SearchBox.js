import React from 'react';
import '../Styles/SearchBox.css';
class SearchBox extends React.Component{

    // SearchBox constructor
    constructor(props){
        super(props);
        // States of: value(value put into input box), title(film title found in the db),
        // des(description of the searched film in the db).
        this.state ={
            value:'',
            title:'',
            des:'',
        };

        // Functions binding
        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        
    }
    // Handle changes in the input box. Reads the value typed by the user and 
    // saves it in the value state.
    handleChange(event){
        this.setState({value: event.target.value});
    }

    //Handel the click of a search button. If the button is pressed, the system looks 
    //for the title of the film in db and then displays it with a description. In the
    //case the movie is not found the appropiate message is displayed. 
    handelSubmit = (event) =>{
        event.preventDefault();
        this.props.filmList.forEach(film => {
            if(this.state.value.toLowerCase() === film.title.toLowerCase()){
                this.setState({title: film.title, des:film.description});
                this.setState({value: ''});
                this.props.display(film.title, film.description, film.genre, film.director, film.image);
                
            }
        });
       
      
    }

    render(){
        return(
            // Form
            <div className="searchBox">
                {/* <h1 className="header">SEARCH</h1> */}
                <form className="form" onSubmit={this.handelSubmit}>
                    {/* <label className="lbl">Search for a film:    */}
                        <input className="inputField"  value={this.state.value} onChange={this.handleChange} placeholder="TITLE"/>
                    {/* </label> */}
                    <input className="submitButton" type="submit" value="SEARCH"/>
                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default SearchBox;