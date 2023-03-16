const weatherForecastEl = document.getElementById('weather-forecast');
const topArticalDisplayEl= document.getElementById('top-article-list-display');
const articalDisplayEl = document.getElementById('article-list-display');
const sportsArticalDisplayEl = document.getElementById('sports-article-display');
const entertainmentArticalDisplayEl = document.getElementById('entertainment-article-display');
const techArticalDisplayEl = document.getElementById('tech-article-display');
const businessArticalDisplayEl = document.getElementById('business-article-display');
const healthArticalDisplayEl = document.getElementById('health-article-display');

const API_KEY ='457ffb33546d73aa472c832cee2dbd5e';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function roundofWeather(data) {
	return Math.round(data)
}
function wordCount(data) {
	if(str.length > 12) {
		return str = str.substring(0,15);
	}
}

getWeatherData()
	function getWeatherData () {
		navigator.geolocation.getCurrentPosition((position) => {
			let {longitude,latitude} = position.coords;
			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
			.then(res => res.json()).then(currentdata => {
				console.log(currentdata)
				showWeatherData(currentdata);
			})
		})
	}
	function showWeatherData(currentdata){
		let temperature = roundofWeather(currentdata.main.temp-273.15);
		let icon = currentdata.weather[0].icon;
		let weather =  capitalizeFirstLetter(currentdata.weather[0].description);
		
		//const add_class = ['sunny', 'cloudy', 'scatteredCloud', 'brokenCloud', 'thunderstorm', 'snow', 'mist']
		if (icon="01d") {
			add_class="sunny"
		}
		else if (icon="ibd") {
			add_class="cloudy"
		}
			
		weatherForecastEl.innerHTML = 
		`<div class="pull-left">
			<p class="tile-weather">${temperature} &#xb0;</p>
			<p>${weather}</p>
		</div>
		<!--<div class="pull-right">
			<span class="${add_class}"></span>
		</div>-->
		`;
	}
	
getTopNewsUS()	
function getTopNewsUS() {
	fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => res.json()).then(articledata => {
		showTopNewsUS(articledata);
	})
}
function showTopNewsUS(articledata) {
	topArticalDisplayEl.innerHTML = articledata.articles.slice(0,1).map((item)=> {
		document.getElementById('tile-image-overlay-content').style.backgroundImage=`url(${item.urlToImage})`;
		return ` 
		  <a href=${item.url} target="_blank" class="tile-image-overlay-display">
			<h2 class="tile-image-overlay-title">${item.title}</h2>
			<p class="tile-image-overlay-content">${item.content}</p>
		  </a>
		  `;
	});
    articalDisplayEl.innerHTML = articledata.articles.slice(1, 4).map((item)=> {
      return ` 
		<div class="article-list-display">
			<img src=${item.urlToImage} width="100px" />
			<a href=${item.url} target="_blank" class="article-list-items">${item.title}</a>
		</div>
		<!--<div>
			<p>${item.title}</p>
			<p>${item.author}</p>
		</div>-->
		`;
    }).join("");
};
getSportsNews() 
function getSportsNews() {
	// fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=91de3022e01e4e438322ebe323f870a8')
	// .then(res => res.json()).then(articledata => {
	// 	showSportsNews(articledata);
	// })
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showSportsNews(articledata);
			}) 
		}
		else {
			//throw new Error(`HTTP error, status = ${res.status}`);
			defaultSportsNews();
		}
	})
}
function defaultSportsNews() {
	sportsArticalDisplayEl.innerHTML = 
	`<a href="#" target="_blank">
		<img class="tile-half-pic" src="images/blog-photo.jpg" />
		<span class="half-tile-text">Test</span>
	</a>`;
}
function showSportsNews(articledata) {
    sportsArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="tile-half-pic" src=${item.urlToImage} />
		<span class="half-tile-text">${item.title}</span>
	  </a>
		`;
    }).join("");
};
getEntertainmentNews() 
function getEntertainmentNews() {
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showEntertainmentNews(articledata);
			}) 
		}
		else {
			defaultEntertainmentNews();
		}
	})
}
function defaultEntertainmentNews(articledata) {
    entertainmentArticalDisplayEl.innerHTML =
    ` <a href="#" target="_blank">
	  	<img class="tile-full-pic" src="images/blog-photo.jpg" width="100%" />
		<span class="full-tile-text">Test</span>
	</a>`;
};
function showEntertainmentNews(articledata) {
    entertainmentArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="tile-full-pic" src=${item.urlToImage} width="100%" />
		<span class="full-tile-text">${item.title}</span>
	</a>
		`;
    });
};
getTechNews() 
function getTechNews() {
	fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => res.json()).then(articledata => {
		showTechNews(articledata);
	})
}
function showTechNews(articledata) {
    techArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  	<img class="tile-full-img" src=${item.urlToImage} width="100%" />
		<span class="full-tile-text article-list-items">${item.title}</span>
		`;
    }).join("");
};
getBusinessNews() 
function getBusinessNews() {
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => res.json()).then(articledata => {
		showBusinessNews(articledata);
	})
}
function showBusinessNews(articledata) {
    businessArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="tile-full-pic tile-full-pic__small" src=${item.urlToImage} width="100%" />
		<span class="full-tile-text">${item.title}</span>
	</a>
		`;
    });
};
getHealthNews() 
function getHealthNews() {
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => res.json()).then(articledata => {
		showHealthNews(articledata);
	})
}
function showHealthNews(articledata) {
    healthArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="tile-full-pic tile-full-pic__small" src=${item.urlToImage} width="100%" />
		<div style="position:relative">
			<span class="full-tile-text__overlay1"></span>
			<span class="full-tile-text full-tile-text__overlay">${item.title}</span>
		</div>
		
	  </a>
		`;
    });
};

//To check - Same code as function showTopNewsArticles(articledata) using for loop instead of map but appearing only once
// function showTopNewsArticles(articledata) {
// for( var i = 0; i < 5; i++) {
// 	articalDisplayEl.innerHTML = `
// 	<div class="card">
// 		<p> ${articledata.articles[i].title}</p>
// 		<p> ${articledata.articles[i].author}</p>
// 	 </div>
// 	`;
	
//   }
// }
	
	