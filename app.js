// main entry of the app

// Project scope: Bot asks a question, we give an answer
// We have to run app.json every time we interact with the app

// import dependency https://www.npmjs.com/package/command-line-args
const commandLineArgs = require('command-line-args');

const fs = require('fs');

const optionDefinitions = [
    { name: 'name', type: String },
    { name: 'order', type: String },
    { name: 'payment', type: Number },
    { name: 'exit', type: Boolean }
  ];

const options = commandLineArgs(optionDefinitions);
console.log(options);

const writeJsonToFile = (data, fs) => {
    // serialize data object
    const dataToString = JSON.stringify(data);

    // write string to data, no append
    fs.writeFileSync('./db.json', dataToString);
}

let getJson = fs.readFileSync('./db.json');

// deserialize json
let data = JSON.parse(getJson);
// console.log(data);

if (options.name) {
    data.name = options.name;

    console.log(`Hello ${options.name}, we are serving pizza, CAKE, PIZZA, SALAD.`);

    // stringify data object and write it to the db.json file
    writeJsonToFile(data, fs);

} else if (options.order) {
    data.order = options.order;

    console.log(`Ok ${data.name}, ${options.order}, is $25. Please enter cash...`);

    // stringify data object and write it to the db.json file
    writeJsonToFile(data, fs);

} else if (options.payment) {
    data.payment = options.payment;

    console.log(`Your change is ${options.payment - 25}. Thank you for shopping at Chuck's. 
                Enter --exit to get the order.`);

    // stringify data object and write it to the db.json file
    writeJsonToFile(data, fs);

} else if (options.exit) {
    data.name = "";
    data.order = "";
    data.payment = "";

     // stringify data object and write it to the db.json file
     writeJsonToFile(data, fs);

    console.log(`Bye`);

} else {
    console.log('Hello. What is you name ?');
}
