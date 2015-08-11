Check the slides presentation


browserify example
==================

Step 1: HTML
------------

    <html>
    <head>
    <script src='bundle.js' type='text/javascript'></script>
    </head>
    <body>
      <h1>Our querystring</h1>
      <div id='mydiv'>This is my div</div>
    </body>
    </html>
  


Step 2: Javascript
------------------

  
    var qs = require('querystring');
    var our_query = window.location.search.slice(1)
    window.onload = function() {
      var x = qs.parse(our_query)

      console.log(x)

      document.getElementById('mydiv').innerHTML = 
      JSON.stringify(x)
    }


Step 3: "browserify" the javascript
-----------------------------------

    browserify index.js -o bundle.js



example 2 with jquery
=====================

[jquery](https://www.npmjs.com/package/jquery/)

"To use jQuery in Node, browser extensions, and other non-browser environments, use only 2.x releases. 1.x does not support these environments."

So we can just use the $ directly   

    var qs = require('querystring');
    var our_query = window.location.search.slice(1)
    $(window).on('ready',function() {
      var x = qs.parse(our_query)

      console.log(x)

      document.getElementById('mydiv').innerHTML = 
      JSON.stringify(x)
    })

