const csvtojson = require('csvtojson');
const path = require('path');
const fs = require('fs');

const csvFilePath = path.resolve(__dirname, 'csv/data.csv');
const txtFilePath = path.resolve(__dirname, 'data.txt');

const readStream = new fs.ReadStream(csvFilePath);
const writeStream = new fs.WriteStream(txtFilePath);

writeStream.on('error', (err) => console.error(err));

readStream.pipe(csvtojson()).pipe(writeStream);