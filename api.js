const axios = require("axios");


app.get("/googlesearch", (req,res)=>{

const options = {
  method: 'GET',
  url: 'https://google-search1.p.rapidapi.com/google-search',
  params: {hl: 'en', q: 'Avengers+Endgame', gl: 'us'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
  }
};



axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

})