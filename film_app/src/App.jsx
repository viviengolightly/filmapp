
// imports
import React, { Component } from 'react'; 
import request from 'request-promise-native';
import Film from './Components/Film.js';
import SearchBox from './Components/SearchBox.js';
import AddFilm from './Components/AddFilm.js';
import './Styles/app.css';
import NavBar from './Components/NavBar.js';
import InfoDisplay from './Components/InfoDisplay';

class App extends Component {

  // App constructor
  constructor(props){
    super(props);
    //f state -> array to keep the db data
    this.state = {
      f: [],
      addBtnPressed: false,
      title: '',
      description:'',
      genre:'',
      director:'',
      image:'',
      showPopup: false,
    };

    //binds the method
    this.getFilmData = this.getFilmData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handelAddBtnClick = this.handelAddBtnClick.bind(this);
    this.handelDisplay = this.handelDisplay.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    //method call to load the films data
    this.getFilmData();
  }
  //The web is refreshed on each data update
  componentDidUpdate(){
    this.getFilmData();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  //GET method to load all the data from db
  getFilmData(){
    const options ={
      uri: 'http://localhost:9000/films',
      json:true,
    };

    request(options)
      .then((films) => {this.setState({ f: films })})
      .catch((err) => {console.log(`Error getting films ${err}`)});

   
  }

  // handel DELETE request(the button id pressed and specified id is send to delete 
  // the film from db)
  handleClick = (id) => {

    const options ={
      uri: `http://localhost:9000/films/${id}`,
      json:true,
      method: 'DELETE'
    };

    request(options)
      .then((r) => {
    })
      .catch((err) => {console.log(
        err
      )});
  }

  // POST request(json set to true automatically stringify the body data)

  handleAdd = (tit, des, gen, dir, img) =>{
    const options = {
      uri: 'http://localhost:9000/films',
      body: {
        title: tit, 
        description: des,
        genre: gen,
        image: img,
        director: dir
      },
      json: true,
      method: 'POST',
    }

    request(options)
      .then((r) => {
        return r.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // If the button is pressed then set addBtnPressed to true and show add section.
  handelAddBtnClick(){
    if(this.state.addBtnPressed === false){
      this.setState({addBtnPressed: true});
    }else{
      this.setState({addBtnPressed: false});
    }
    
  }

  //Dispaly movie found in SearchBox
  handelDisplay(t, d, g, dir, img){
    this.setState({
      title:t,
      description:d,
      genre: g,
      director:dir,
      image: img,
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="App">
        <div className="addButton">
          <button onClick={this.handelAddBtnClick}>ADD MOVIE</button>
        </div>
        <div className="searchBox">
          {/* Pass the list of films to the Search Component */}
          <SearchBox filmList = {this.state.f} display={this.handelDisplay}/>
        </div>

        <div className="header">
          <h1>FILMS</h1>
        </div>

        <div className="navigationBar">
          <NavBar filmList = {this.state.f}/>
        </div>
{/*  Display all the movies in the db with delete button */}
        {/* <div className="filmList">
          {this.state.f.map(film => {
            return(
              <ul key={film._id}>
                <Film 
                  film ={film}
                  title={film.title}
                  description={film.description}
                  genre={film.genre}
                  director={film.director}
                  handleDelete={this.handleClick}
                />
              </ul>
              
            );
          })}
        </div> */}
        
        {/*Display found movie */}
        <div className="info">
          {/* <p>{this.state.title}</p>
          <p>{this.state.description}</p> */}
          {this.state.showPopup ?
          <InfoDisplay 
            title={this.state.title}
            description={this.state.description}
            genre={this.state.genre}
            director={this.state.director}
            image={this.state.image}
            closePopUp = {this.togglePopup}
          />
          : null
          }
        </div>
        

        {/* Renders componenet if the addBtnPressed is set to true by clicking the button */}
       {this.state.addBtnPressed && <div className="addFilm">
          <AddFilm 
            addMovie={this.handleAdd}
          />
        </div>
       }    

      </div>

     
      
    );
  }
}

export default App;
