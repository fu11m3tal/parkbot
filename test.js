#!/usr/bin/env node
var fs = require('fs');

args = []
process.argv.forEach(function (val, index, array) 
{
    args.push(val); 
});

var file = fs.readFileSync(args[2], "UTF-8", function (err, data) 
{
if (err) throw err;
});