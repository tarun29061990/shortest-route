Shortest-route
==============

Pass a list of cities in a pipe separated format and get the shortest route. Shortest route means if you are goin to city A and then to city B and then to city C. So your input will be A|B|C and it will give you the shortest route. For example if you are covering less kilometers between A to C then to B then your shortest route will be A|C|B. I used google distance matrix api to calculate the distance between cities.

Explanation
-----------
Calculating the distance between cities provided using google distance matrix api and then calculating all the permutations and the distance of all the permutations. So if you have cities such as A,B and C then:-
```sh
A-B B-C C-A (Distances by google matrix api)

ABC, ACB, BAC, BCA, CAB, CBA (all the permutations)

Distance for ABC = A-B-C-A (A to B to C to A)

finally calculate the distance of each permutation and whichever is the shortest one will be your shortest route.
```

Installation
------------

```sh
npm install shortest-route;
```

Quick Start
-----------
```sh
var shortest-route = require("shortest-route");
var city_list = "A|B|C";
shortest-route.getShortPath(city_list, function(route){
    console.log(route);
});
```

Licence
-------
Copyright (c) 2014, Tarun Chaudhary (http://curioustechie.in)


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
