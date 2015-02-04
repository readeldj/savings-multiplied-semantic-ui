(function(){
  'use strict';
  var url = 'https://savingsmultipliedssh.firebaseio.com/items.json'
  $.get(url, function(res){
    _.forEach(res, function(item){
        createList(item);
    });
  });

  function createList(data) {
    var $li = $('<li></li>');
      var $pic = $('<img class="images" src='+data.image+'></img>');
      var $title = $('<h6>'+data.title+'</h6>');
      var $seller = $('<p>'+data.seller+'</p>');
      var $price = $('<p>'+data.price+'</p>');
      var $endDate = $('<p>'+data.endDate+'</p>');
    $li.append($pic);
    $li.append($title);
    $li.append($seller);
    $li.append($price);
    $li.append($endDate);
    
    var $searchResultsList = $('#searchResultsList');
    $searchResultsList.append($li);
  }

}());

