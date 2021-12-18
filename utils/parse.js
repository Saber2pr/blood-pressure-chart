const fs = require('fs/promises');
const path = require('path');
const csv = require('csvtojson');
const { pattern } = require('@saber2pr/utils');

const csvFilePath = path.join(__dirname, '../BLOOD_RECORD.csv');
const htmlPath = path.join(__dirname, '../index.html');

async function parse() {
  const buf = await fs.readFile(htmlPath);
  const html = buf.toString();

  const jsonArray = await csv({
    noheader: true,
    output: 'csv',
  }).fromFile(csvFilePath);

  await fs.writeFile(
    htmlPath,
    pattern.inject(
      html,
      '/* start */',
      '/* end */',
      `var BLOOD_RECORD = ${JSON.stringify(jsonArray)}`,
    ),
  );
}

parse();
