const weatherForecastEl = document.getElementById('weather-forecast');
const topArticalDisplayEl= document.getElementById('top-article-list-display');
const articalDisplayEl = document.getElementById('article-list-display');
const sportsArticalDisplayEl = document.getElementById('sports-article-display');
const entertainmentArticalDisplayEl = document.getElementById('entertainment-article-display');
const techArticalDisplayEl = document.getElementById('tech-article-display');
const businessArticalDisplayEl = document.getElementById('business-article-display');
const healthArticalDisplayEl = document.getElementById('health-article-display');
const scienceArticalDisplayEl = document.getElementById('science-article-display');

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
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showTopNewsUS(articledata);
			}) 
		}
		else {
			deafultTopNews();
		}
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
		  `;
	  }).join("");
};
function deafultTopNews() {
	topArticalDisplayEl.innerHTML =
	`<a href="" target="_blank" class="tile-image-overlay-display">
		<h2 class="tile-image-overlay-title">The China-brokered Saudi-Iran deal has big repercussions for the Middle East and the U.S</h2>
		<p class="tile-image-overlay-content">A man in Tehran holds a local newspaper reporting on its front page the China-brokered deal between Iran and Saudi Arabia to restore ties, signed in Beijing the previous day.</p>
	</a>`
	articalDisplayEl.innerHTML =
	`	<div class="article-list-display">
			<img src="https://storage.googleapis.com/afs-prod/media/15777b4b464943798e150c94f693d97d/3000.webp" width="100px" />
			<a href="https://apnews.com/article/federal-reserve-silicon-valley-bank-regulation-609bde9b9248fbc590ff98775e0c8d49" target="_blank" class="article-list-items">Federal Reserve criticized for missing red flags before SVB collapse - The Associated Press - en Español</a>
		</div>
		<div class="article-list-display">
			<img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-03/584a3441-2c9b-40e7-a13c-d5ca677a1c12.jpg" width="100px /">
			<a href="https://cointelegraph.com/news/signature-bank-investigated-for-money-laundering-prior-to-demise-report" target="_blank" class="article-list-items">Signature Bank investigated for money laundering prior to demise: Report - Cointelegraph</a>
		</div>
		<div class="article-list-display">
			<img src="https://sportshub.cbsistatic.com/i/r/2023/03/15/53da5e43-5d49-46b8-b1af-0822d0306bb8/thumbnail/1200x675/e93b948ae7421a0d97a55f6d57ec63da/gettyimages-1248275885-1.jpg" width="100px" />
			<a href="https://www.cbssports.com/college-basketball/news/nit-bracket-2023-tournament-schedule-dates-times-no-1-seed-rutgers-falls-to-hofstra-as-first-round-begins/" target="_blank" class="article-list-items">NIT bracket 2023 tournament schedule, dates, times: No. 1 seed Rutgers falls to Hofstra as first round begins - CBS Sports</a>
		</div>
	`
}
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
	`<a href="https://www.ncaa.com/news/basketball-men/bracketiq/2023-03-14/perfect-ncaa-bracket-absurd-odds-march-madness-dream" target="_blank">
		<img class="half-tile-pic" src="https://www.ncaa.com/_flysystem/public-s3/styles/large_16x9/public-s3/images/2019-02-13/128-brackets-perfect-bracket-demonstration_0.png?h=cd785ca4&itok=Nk1v66ka" />
		<span class="half-tile-text">The absurd odds of a perfect NCAA tournament bracket put into perspective</span>
	</a>`;
}
function showSportsNews(articledata) {
    sportsArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="half-tile-pic" src=${item.urlToImage} />
		<span class="half-tile-text">${item.title}</span>
	  </a>
		`;
    });
};
getHealthNews() 
function getHealthNews() {
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showHealthNews(articledata);
			}) 
		}
		else {
			defaultHealthNews();
		}
	})
}
function showHealthNews(articledata) {
    healthArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="full-tile-pic full-tile-pic__small" src=${item.urlToImage} width="100%" />
		<div style="position:relative">
			<span class="full-tile-text full-tile-text__overlay">${item.title}</span>
		</div>
	  </a>`;
    });
};
function defaultHealthNews() {
	healthArticalDisplayEl.innerHTML =
	`<a href="https://www.thedailybeast.com/highly-pathogenic-avian-influenza-is-devastating-birds-and-humans-may-be-next" target="_blank">
		<img class="full-tile-pic full-tile-pic__small" src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1678837848/230313-hpai-tease_vn4cxc" width="100%" />
		<div style="position:relative">
			<span class="full-tile-text full-tile-text__overlay">Highly Pathogenic Avian Influenza Is Devastating Birds, and Humans May Be Next - The Daily Beast</span>
		</div>
	</a>`
}

getScienceNews() 
function getScienceNews() {
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showScienceNews(articledata);
			}) 
		}
		else {
			defaultScienceNews();
		}
	})
}
function showScienceNews(articledata) {
    scienceArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
    return `<a href=${item.url} target="_blank">
	  	<img class="full-tile-pic full-tile-pic__small" src=${item.urlToImage} width="100%" />
		<span class="full-tile-text">${item.title}</span>
	</a>`;
    });
};
function defaultScienceNews() {
    scienceArticalDisplayEl.innerHTML =
    ` <a href="https://www.foxnews.com/science/newly-discovered-asteroid-reduced-odds-striking-earth" target="_blank">
	  	<img class="full-tile-pic full-tile-pic__small" src="https://static.foxnews.com/foxnews.com/content/uploads/2023/03/2023-DW-asteroid.png" width="100%" />
		<span class="full-tile-text">Newly discovered asteroid has...</span>
	</a>`;
};
getBusinessNews() 
function getBusinessNews() {
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showBusinessNews(articledata);
			}) 
		}
		else {
			defaultBusinessNews();
		}
	})
}
function showBusinessNews(articledata) {
    businessArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="half-tile-pic" src=${item.urlToImage} width="100%" />
		<span class="half-tile-text">${item.title}</span>
	</a>
		`;
    });
};
function defaultBusinessNews() {
	businessArticalDisplayEl.innerHTML =
	`<a href="https://apnews.com/article/business-financial-services-signature-bank-6aa3564a8acda9098929abe4741fcbfd">
		<img class="half-tile-pic" src="https://storage.googleapis.com/afs-prod/media/e6a28a52d7fc4f5199911db65a893a1f/3000.webp" width="100%" />
		<span class="half-tile-text">Is my money safe? What you need to know about bank failures - The Associated Press</span>
	</a>`
}
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
function showEntertainmentNews(articledata) {
    entertainmentArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="full-tile-pic" src=${item.urlToImage} width="100%" />
		<span class="full-tile-text">${item.title}</span>
	</a>
		`;
    });
};
function defaultEntertainmentNews(articledata) {
    entertainmentArticalDisplayEl.innerHTML =
    ` <a href="https://www.rollingstone.com/music/music-country/2023-outlaw-music-festival-tour-dates-lineup-willie-nelson-1234696070/" target="_blank">
	  	<img class="full-tile-pic" src="https://www.rollingstone.com/wp-content/uploads/2023/03/GettyImages-1427451112-2.jpg?w=1600&h=900&crop=1" width="100%" />
		<span class="full-tile-text">Willie Nelson, at 90, Will Headline the 2023 Outlaw Music Festival Tour - Rolling Stone</span>
	</a>`;
};
getTechNews() 
function getTechNews() {
	fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=91de3022e01e4e438322ebe323f870a8')
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showTechNews(articledata);
			}) 
		}
		else {
			defaultTechNews();
		}
	})
}
function showTechNews(articledata) {
    techArticalDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank" class="tech-display-2">
	  	<img class="half-tile-pic" src=${item.urlToImage} width="100%" />
		<span class="half-tile-text article-list-items">${item.title}</span>
		<div class="clearfix"></div>
		<p class="half-tile-header-full-content">${item.content}</p>
	</a>
		`;
    });
};
function defaultTechNews() {
	techArticalDisplayEl.innerHTML =
	`<a href="https://techcrunch.com/2023/03/15/torch-is-building-solar-powered-outdoor-sensors-to-spot-wildfires-early/">
		<img class="half-tile-pic" src="https://techcrunch.com/wp-content/uploads/2023/03/Torch-ID-Render-Pair-Top_02.jpg?resize=1200,675" width="100%" />
		<span class="half-tile-text article-list-items">Test</span>
		<div class="clearfix"></div>
		<p class="half-tile-header-full-content">The Nest Protect is the single best piece of smart home hardware Ive ever purchased. Not everything in your home would benefit from being connected, but smoke detectors really do. </p>
	</a>`
}

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
	
	