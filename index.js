var projects =[

  {
  	name: 'Random Quote Machine',
  	img: './images/quote.png',
  	url: 'http://codepen.io/maryam106/full/zNdXrV',
    detail: 'jquery & ajax'
  },

  {
  	name: 'Local Weather App',
  	img: './images/weather.png',
    url: 'https://amran16.github.io/weather_app',
  	//url: 'http://codepen.io/maryam106/full/RGXwex'
    detail: 'jquery & ajax'
  },

  {
  	name: 'Wikipedia Viewer',
  	img: './images/wiki.png',
  	url: 'http://codepen.io/maryam106/full/OWQvwG',
    detail: 'jquery & ajax'
  },

  {
  	name: 'JavaScript Calculator',
  	img: './images/calculator.png',
    //url: 'http://codepen.io/maryam106/full/apZxyM'
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

]

projects.map(function(item){

  var title = item.name,
      image = item.img,
    linkUrl = item.url,
    info = item.detail;

	$('.flex-container').append(`
			<div class='flex-item'>
       <a target='_blank' href=${linkUrl}>
        <img src=${image} alt=${title} class='image'>
         <h3 class='title'>${title}</h3>
         <h7>${info}</h7>
        </a>
			 </div>
		`)

    //$('.flex-item').css('background-image', `img(${image})`);
});
