var projects =[

  {
  	name: 'Random Quote Machine',
  	img: './images/quote.png',
    url: 'http://codepen.io/maryam106/full/zNdXrV',
    //url: 'https://amran16.github.io/random_quote',
    detail: 'jquery & ajax'
  },

  {
  	name: 'Local Weather App',
  	img: './images/weather.png',
    //url: 'https://amran16.github.io/weather_app',
  	url: 'http://codepen.io/maryam106/full/RGXwex',
    detail: 'jquery & ajax'
  },

  {
  	name: 'Wikipedia Viewer',
  	img: './images/wiki.png',
    url: 'https://amran16.github.io/wikipedia_viewer',
    detail: 'jquery & ajax'
  },

  {
  	name: 'JavaScript Calculator',
  	img: './images/calculator.png',
  	url: 'https://amran16.github.io/js_calculator',
    detail: 'jQuery'
  },
  {
  	name: 'Timestamp Microservice',
  	img: './images/timestamp.png',
    url: 'https://timestamp-microservice-fcc1.herokuapp.com',
    detail: 'Node & Express'
  },

  {
  	name: 'Header Parser Microservice',
  	img: './images/header_parser.png',
    url: 'https://request-header-parser-fcc2.herokuapp.com',
    detail: 'Node & Express'
  },

  {
  	name: 'URL Shortner Microservice',
  	img: './images/urlShortner.png',
    url: 'https://maryamnumbertwo.herokuapp.com',
    detail: 'Node, Express & MongoDB'
  },

  {
  	name: 'File Metadata Microservice',
  	img: './images/metadata.png',
    url: 'https://protected-escarpment-73474.herokuapp.com',
    detail: 'Node & Express'
  },

  {
  	name: 'Markdown Previwer',
  	img: './images/markdown.png',
    //url: 'https://amran16.github.io/markdown_previewer',
    url: 'http://codepen.io/maryam106/full/xgLbWE',
    detail: 'React'
  },
  {
  	name: 'Camper Leaderboard',
  	img: './images/leaderboard.png',
    url: 'https://amran16.github.io/leaderboard',
    detail: 'React'
  },
  {
  	name: 'Pomodor Clock',
  	img: './images/pomodor.png',
    url: 'https://amran16.github.io/pomodoro',
    detail: 'JavaScript'
  },
  {
  	name: 'Yelpcamp',
  	img: './images/yelpcamp.png',
    url: 'https://yelpcampsite.herokuapp.com',
    detail: 'Node & Express'
  }


]

projects.map(function(item){

  var title = item.name,
      image = item.img,
    linkUrl = item.url,
    info = item.detail;
    //<h7>${info}</h7>

	$('.flex-container').append(`
			<div class='flex-item'>
       <a target='_blank' href=${linkUrl}>
        <img src=${image} alt=${title} class='image'>
         <h3 class='title'>${title}</h3>
        </a>
			</div>
		`)
});
