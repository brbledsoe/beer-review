var beers = [];

$('.post-beer').on('click', function (e) {
  e.preventDefault();

  var name = $('#beer-name').val();
  var category = $('#beer-category').val();
  var rating = $('#beer-rating').val();

  addBeer(name, category, rating);
  updateBeers();

});

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
