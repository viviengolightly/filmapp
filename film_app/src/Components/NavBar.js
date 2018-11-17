import React from 'react';
import '../Styles/NavBar.css';

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handelClick = this.handelClick.bind(this);
        

        this.state ={
            value:'',
            title:'',
            des:''
        };
    }

    handelClick(event){
        event.preventDefault();
        this.setState({
            value : event.target.name
       });

    }

    render(){
        return(
            <div>
                <div className="buttons">
                    <button className="btn-1 btn" name="action" onClick={this.handelClick}> ACTION </button>
                    <button className="btn-2 btn" name="adventure" onClick={this.handelClick}> ADVENTURE </button>
                    <button className="btn-3 btn" name="comedy" onClick={this.handelClick}> COMEDY </button>
                    <button className="btn-4 btn" name="crime" onClick={this.handelClick}> CRIME </button>
                    <button className="btn-5 btn" name="drama" onClick={this.handelClick}> DRAMA </button>
                    <button className="btn-6 btn" name="historical" onClick={this.handelClick}> HISTORICAL </button>
                    <button className="btn-7 btn" name="horror" onClick={this.handelClick}> HORROR </button>
                    <button className="btn-8 btn" name="musical" onClick={this.handelClick}> MUSICAL </button>
                    <button className="btn-9 btn" name="scifi" onClick={this.handelClick}> SCI-FI</button>
                    <button className="btn-10 btn" name="western" onClick={this.handelClick}> WESTERN</button>
                </div>
                <div className="infoDisplay">
                    {this.props.filmList.map(film => {
                        if(this.state.value === film.genre.toLowerCase()){
                            return(
                                <div key={film._id} className="filmInfo">
                                    <p>Title: {film.title}</p>
                                    <p>Genre: {film.genre}</p>
                                    <p>Plot: {film.description}</p>
                                    <p>Director: {film.director}</p>

                                </div>
                            );
                        }else{
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    }
}