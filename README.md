shortest-route
==============

Pass a list of cities in a pipe separated format and get the shortest route. Shortest route means if you are goin to city A and then to city B and then to city C. So your input will be A|B|C and it will give you the shortest route. For example if you are covering less kilometers between A to C then to B then your shortest route will be A|C|B.

Installation
------------

```sh
npm install shortest-route;

var shortest-route = require("shortest-route");
var city_list = "A|B|C"
shortest-route.getShortPath(city_list, function(route){
    console.log(route);
});
```