import React, { Component } from 'react';
import '../App.css';
import Titles from './Titles';
import Form from './Form'
import Movie from './Movie'

const apikey = "fe1f7bc9"

class App extends Component {

  getMovieReview = async(e) => {
    e.preventDefault()
    const movie = e.target.elements.search.value
    const api_call = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${apikey}`)
    const response = await api_call.json()
    console.log(response)
  }

  render() {
    return (
      <div className="App">
          Hello, Iam Goku!
          <Titles/>
          <Form loadMovie = {this.getMovieReview}/>
          <Movie/>
      </div>
    );
  }
}

export default App;
