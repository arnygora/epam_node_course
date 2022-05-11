import csvToJson from 'csvtojson';
import path from 'path';
import fs from 'fs';

const csvFilePath = path.resolve(path.dirname(''), 'src/HW_1/csv/data.csv');
const txtFilePath = path.resolve(path.dirname(''), 'src/HW_1/csv/data.txt');

const readStream = new fs.ReadStream(csvFilePath);
const writeStream = new fs.WriteStream(txtFilePath);

writeStream.on('error', (err) => console.error(err));

readStream.pipe(csvToJson()).pipe(writeStream);