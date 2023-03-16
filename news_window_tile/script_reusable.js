const ENT_API_PATH = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=91de3022e01e4e438322ebe323f870a8";
const SPORT_API_PATH = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=91de3022e01e4e438322ebe323f870a8";
getFullTileTextImg('api_path') 
getFullTileTextImg(ENT_API_PATH);
getFullTileTextImg(SPORT_API_PATH);
function getFullTileTextImg() {
	fetch(ENT_API_PATH)
	.then(res => {
		if (res.ok) {
			console.log(res); 
			res.json().then(articledata => {
				showFullTileTextImg(articledata);
			}) 
		}
		else {
			defaultFullTileTextImg();
		}
	})
}
function showFullTileTextImg(articledata) {
    showFullTileDisplayEl.innerHTML = articledata.articles.slice(0, 1).map((item)=> {
      return ` 
	  <a href=${item.url} target="_blank">
	  	<img class="tile-full-pic" src=${item.urlToImage} width="100%" />
		<span class="full-tile-text">${item.title}</span>
	</a>
		`;
    });
};
function defaultFullTileTextImg(articledata) {
    entertainmentArticalDisplayEl.innerHTML =
    ` <a href="#" target="_blank">
	  	<img class="tile-full-pic" src="images/blog-photo.jpg" width="100%" />
		<span class="full-tile-text">Test</span>
	</a>`;
};