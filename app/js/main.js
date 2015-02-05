(function(){
  'use strict';
  var url = 'https://savingsmultipliedssh.firebaseio.com/items.json';
  var itemArray = [];
  $.get(url, function(res){
    _.forEach(res, function(item){
      itemArray.push(item);
    });

    sort(itemArray, 'price');

  });

  function sort(array, searchCriteria){
    var sortedItemArray = _.sortBy(itemArray, searchCriteria);
    _.forEach(sortedItemArray, function(item){
      createList(item);
    });
  };

  var $select = $('#searchFilter');
  $select.change(function(){
    var $ul = $('#searchResultsList');
    function selectedOption(){ 
      if($select.find(':selected').text() === 'End Date') {
        return 'endDate';
      } else { return price}
    }
    console.log(selectedOption);
    $ul.empty();
    sort(itemArray, selectedOption());
  });


  function createList(data) {
    var endDateFormatted = moment().format(data.endDate);
    var now = moment();
    var timeLeft = moment(endDateFormatted).from(now);
    //console.log(endDateFormatted);
    //console.log(timeLeft);
    var $li = $('<li></li>');
      var $pic = $('<img class="images" src='+data.image+'></img>');
      var $title = $('<h6>'+data.title+'</h6>');
      var $seller = $('<p>'+data.seller+'</p>');
      var $price = $('<p>'+'$'+data.price.toFixed(2)+'</p>');
      var $endDate = $('<p>'+timeLeft+'</p>');
    $li.append($pic);
    $li.append($title);
    $li.append($seller);
    $li.append($price);
    $li.append($endDate);
    
    var $searchResultsList = $('#searchResultsList');
    $searchResultsList.append($li);
  }

}());




