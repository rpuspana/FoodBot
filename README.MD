### Description

Talk to a bot using command line parameters and order food.

### Tech used
- Node.Js 8
- JavaScript ES6
- Command line args NPM package https://www.npmjs.com/package/command-line-args

### Usage

$ node app.js
app response: Hello. What is you name ?

$ node app.js --name=Radu
app response: Hello Radu, we are serving pizza, CAKE, PIZZA, SALAD.

$ node app.js --order=Cake
app response: Ok Radu, Cake, is $25. Please enter cash...

$  node app.js --payment=200
app response: Your change is 175. Thank you for shopping at Chuck's. nter --exit to get the order.

$  node app.js --exit
app response: Bye