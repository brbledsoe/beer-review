var beers = [];

// CLICK FUNCTION FOR POSTING
$('.post-beer').on('click', function (e) {
  e.preventDefault();

  var name = $('#beer-name').val();
  var category = $('#beer-category').val();
  var rating = $('#beer-rating').val();

  addBeer(name, category, rating);
  updateBeers();

});

// CLICK FUNCTION FOR SORTING
$('.sort-beer').on('click', function (e) {
  e.preventDefault();

  updateBeers();
  sortBeer();
});

var sortBeer = function () {
  beers.sort(function(a, b){
    return a.rating - b.rating;
    console.log(beers);
    // var a1= a.name, b1= b.name;
    // if(a1== b1) return 0;
    // return a1> b1? 1: -1;
});
}





var addBeer = function (name, category, rating){  
  var br = {
    name: name, 
    category: category,
    rating: rating,

  };

  beers.push(br);
// {name: name, category: category});
  }

var updateBeers = function () {
  $('.beers').find('p').remove();
  for( var i = 0; i < beers.length; i++ ) {
    $('.beers').append('<p>' + beers[i].name + ': ' + beers[i].category + ': ' + beers[i].rating + '</p>');
    
  }
}


