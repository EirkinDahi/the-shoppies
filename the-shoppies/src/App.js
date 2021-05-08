import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import Header from './components/Header';
import Nominate from './components/Nominate';
import Nominated from './components/Nominated';
import RemoveNominated from './components/RemoveNominated'

function App(){
  const[movies, setMovies] = useState([]);
  const [searchValue, setSearchVal] = useState('');
  const[nominated,setNominated] = useState([]);

  const getMovieRequest = async(searchValue) =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8aace60e`;
    const response = await fetch(url);
    const responseJson = await response.json();
    
    console.log(responseJson);

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue]);

  // useEffect(()=>{
  //   const movieNominated =JSON.parse(
  //     localStorage.getItem('react-the-shoppies-nominated')
  //   );
  //   setNominated(movieNominated);
  // },[]);

  // const saveToLocal=(items)=>{
  //   localStorage.setItem('react-the-shoppies-nominated',JSON.stringify(items));
  // };

  const nominateMovie =(movie)=>{
    const nominateList =[...nominated,movie];
    setNominated(nominateList);
    // saveToLocal(nominateList);
  };

  const removeNominatedMovie=(movie)=>{
    const nominateList=nominated.filter(
      (nominate)=> nominate.imdbId !== movie.imdbId
    );
    setNominated(nominateList);
    // saveToLocal(nominateList);
  };

  return(
      <Router>
        <Header/>
        <Nominate searchValue = {searchValue} setSearchValue={setSearchVal}/>

        <div className = 'container-fluid shoppies-app'>
          <div className='row d-flex align-items-center'>
            <MovieListHeading heading = 'Movies'/>
          </div>
        <div className ='row'>
            <MovieList movies = {movies}  nominatedComponent={Nominated} handleNominateClick ={nominateMovie}/>
        </div>
        <div className='row d-flex align-items-center'>
            <MovieListHeading heading = 'Nominated'/>
          </div>
        <div className ='row'>
          <MovieList movies = {nominated} handleNominateClick={removeNominatedMovie} nominatedComponent={RemoveNominated} />
        </div>
       </div>

      </Router>
  );
 
};

export default App;
