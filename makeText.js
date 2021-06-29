/** Command-line tool to generate Markov text. */
const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");

function generateText(text) {
  let mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
}
function readFile(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.error(`Error with file, ${err}`);
      process.exit(1);
    }

    generateText(data);
  });
}

async function readURL(url) {
  try {
    let res = await axios.get(url);
    generateText(res.data);
  } catch (err) {
    console.log("Error with url", e);
    process.exit(1);
  }
}
if (process.argv[2].startsWith("http")) {
  readURL(process.argv[2]);
} else {
  readFile(process.argv[2]);
}
