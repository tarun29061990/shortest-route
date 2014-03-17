Shortest-route
==============

Pass a list of cities in a pipe separated format and get the shortest route. Shortest route means if you are goin to city A and then to city B and then to city C. So your input will be A|B|C and it will give you the shortest route. For example if you are covering less kilometers between A to C then to B then your shortest route will be A|C|B.

Installation
------------

```sh
npm install shortest-route;
```

Quick Start
-----------
```sh
var shortest-route = require("shortest-route");
var city_list = "A|B|C"
shortest-route.getShortPath(city_list, function(route){
    console.log(route);
});
```

Licence
-------
Copyright (c) 2014, Tarun Chaudhary (http://curioustechie.in)


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
