var projects =[

  {
  	name: 'Night Life App',
  	img: './images/nightlife.png',
  	url: 'https://nightlifeproject.herokuapp.com/bars',
    detail: 'Node, Express & MongoDB'
  },
  {
  	name: 'Yelpcamp',
  	img: './images/yelpcamp.png',
    url: 'https://yelpcampsite.herokuapp.com',
    detail: 'Node & Express'
  },
  {
    name: 'Camper Leaderboard',
    img: './images/leaderboard.png',
    url: 'https://amran16.github.io/camper-leaderboard',
    detail: 'React'
  },
  {
    name: 'Recipe App',
    img: './images/recipebox.png',
    url: 'https://amran16.github.io/Recipe-Box',
    detail: 'React'
  },
  {
  	name: 'Wikipedia Viewer',
  	img: './images/wiki.png',
    url: 'https://amran16.github.io/wikipedia_viewer',
    detail: 'jquery & ajax'
  },
  {
  	name: 'Random Quote Machine',
  	img: './images/quote.png',
    url: 'https://amran16.github.io/random_quote',
    detail: 'jquery & ajax'
  },
  {
  	name: 'JavaScript Calculator',
  	img: './images/calculator.png',
  	url: 'https://amran16.github.io/js_calculator',
    detail: 'jQuery'
  },
  {
    name: 'Pomodor Clock',
    img: './images/pomodor.png',
    url: 'https://amran16.github.io/pomodoro',
    detail: 'JavaScript'
  },
  {
  	name: 'Header Parser Microservice',
  	img: './images/header_parser.png',
    url: 'https://request-header-parser-fcc2.herokuapp.com',
    detail: 'Node & Express'
  },
  {
  	name: 'File Metadata Microservice',
  	img: './images/metadata.png',
    url: 'https://protected-escarpment-73474.herokuapp.com',
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
          <p>${info}</p>
        </a>
      </div>
		`)
});