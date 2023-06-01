import {createContext}from 'react'
import axios from "axios";
import React, { useEffect, useState } from "react";
export let MediaContext=createContext([])


export function MediaContextProvider ( props ){

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTV, setTrendingTV] = useState([]);
    const [persons, setPersons] = useState([]);
  
    async function gitTrendingItems(mediaType, coalBack) {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=96236a4aa06f5d0af259ce2d6e42c67d`
      );
      coalBack(data.results);
    }
  
    useEffect(() => {
      gitTrendingItems("movie", setTrendingMovies);
      gitTrendingItems("tv", setTrendingTV);
      gitTrendingItems("person", setPersons);
    }, []);

    return <MediaContext.Provider value={{trendingMovies,trendingTV,persons}}>
    
    {props.children}
    </MediaContext.Provider>
}