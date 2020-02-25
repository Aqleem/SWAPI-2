const express = require('express');
const app = express (); 
const axios = require('axios');
    
// Get All the films for star wars.
        axios.get('https://swapi.co/api/films')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
// Get the films having title “The Phantom Menace”
        axios.get("https://swapi.co/api/films/4").then(response =>{
            console.log(response.data)
        })

        // Get the films having title “The Phantom Menace”
        async function searchFilm(filmName) {
            let response  = await axios.get('https://swapi.co/api/films').then(res => res.data.results);
            let film = response.find(record => record.title == filmName);
            console.log(film.title);
        }
        
        searchFilm("The Phantom Menace");


        app.listen (4000 , ()=>  console.log ("server is runing"));
