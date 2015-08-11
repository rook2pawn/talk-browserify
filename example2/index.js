var qs = require('querystring');

var our_query = window.location.search.slice(1)

$(window).ready(function() {
  var x = qs.parse(our_query)

  console.log(x)

  $('div#mydiv').html(JSON.stringify(x))
})
