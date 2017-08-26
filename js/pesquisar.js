document.addEventListener('DOMContentLoaded', function(){
	setTimeout(function(){
		document.getElementById('getSearchBitmap').addEventListener('click', searchImagesBitmap);
		document.getElementById('getSearchVector').addEventListener('click', searchImagesVector);
	}, 1000);
});

var servidoresBitmap = ['http://www.freepik.com/index.php?goto=2&searchform=1&k=', 'https://pixabay.com/pt/photos/?q=', 'https://stocksnap.io/search/', 'https://www.pexels.com/search/', 'http://www.pngpix.com/?q=', 'https://unsplash.com/search/photos/', 'http://pt.freeimages.com/search/'];
var servidoresVetor = ['http://www.freepik.com/index.php?goto=2&searchform=1&k=', 'https://visualhunt.com/search/instant/?q=', 'https://www.vexels.com/graphics/', 'http://freedesignfile.com/?s='];

function searchImagesBitmap() {
	var search = document.getElementById('searchBitmap').value;
	var c = 0;

	while (c < servidoresBitmap.length) {
		window.open(servidoresBitmap[c] + search);
		c++;
	}
	
	return
}


function searchImagesVector() {	
	var search = document.getElementById('searchVector').value;
	var c = 0;

	while (c < servidoresVetor.length) {
		window.open(servidoresVetor[c] + search);
		c++;
	}

	return
}