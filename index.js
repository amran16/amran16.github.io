var projects =[

  {
	name: 'Random Quote Machine',
	img: './images/quote.png',
	url: 'http://codepen.io/maryam106/pen/zNdXrV'
  },

  {
	name: 'Local Weather App',
	img: './images/weather.png',
	url: 'http://codepen.io/maryam106/pen/RGXwex'
  },

  {
	name: 'Wikipedia Viewer',
	img: './images/wiki.png',
	url: 'https://amran16.github.io/weather_app'
  //url: 'http://codepen.io/maryam106/full/OWQvwG/' //doesn't work with full page
  },

  {
	name: 'JavaScript Calculator',
	img: './images/Calculator.png',
	url: 'https://amran16.github.io/js_calculator'
  }

]


projects.map(function(item){

  var title = item.name,
      image = item.img,
    linkUrl = item.url;

  var description = item.id;


	$('.cards').append(`
		<a class="ui fluid card" target="_blank" href=${linkUrl}>
			<div class="image">
			  <img src=${image} alt=${name} class="cardImage">
			</div>
			  <div class="ui center aligned content">${title}</div>
		</a>
		`)

});
