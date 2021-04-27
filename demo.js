var modul = require('./myfirstmodule');
var feature= require('./feature');

function main() { 
    return 'Hi, I am main';
}

function hello() { 
    console.warn(main());
    console.warn(modul.module());
    console.warn(feature.feature1());
}

hello();