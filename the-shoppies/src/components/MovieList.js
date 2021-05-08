import React from 'react';


const MovieList = (props) =>{
    const NominatedComponent=props.nominatedComponent;
    
    return(
        <>
            {props.movies.map((movie,index) =>(
                <div className="image-container d-flex justify-content-start">
                    <img src ={movie.Poster} alt='movie' width="200"></img>
                
                    <div onClick = {()=>props.handleNominateClick(movie)} className='overlay align-items-center justify-content-center'>
                        <NominatedComponent/>
                    </div>
                </div>          
            ))}
        </>
    );
};

export default MovieList;