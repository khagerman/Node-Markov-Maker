/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  // i need to get the word
  // need to find word after
  // if word after is nothing, null

  makeChains() {
    let chain = {};
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] ? this.words[i + 1] : null;
      chain[word] ? chain[word].push(nextWord) : (chain[word] = [nextWord]);
    }
    this.chain = chain;
  }

  /** return random text from chains */

  makeText(numWords = 50) {
    function getRandom(array) {
      // get Random word from list
      return array[Math.floor(Math.random() * array.length)];
    }
    let keys = Object.keys(this.chain);
    let key = getRandom(keys);
    let output = [];
    while (output.length < numWords && key !== null) {
      output.push(key);
      key = getRandom(this.chain[key]);
    }
    return output.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};

// stuff for testing
// let mm =
//   new MarkovMachine(`Four score and seven years ago our fathers brought forth on this continent, a
// new nation, conceived in Liberty, and dedicated to the proposition that all men
// are created equal.

// Now we are engaged in a great civil war, testing whether that nation, or any
// nation so conceived and so dedicated, can long endure. We are met on a great
// battle-field of that war. We have come to dedicate a portion of that field, as
// a final resting place for those who here gave their lives that that nation
// might live. It is altogether fitting and proper that we should do this.

// But, in a larger sense, we can not dedicate -- we can not consecrate -- we can
// not hallow -- this ground. The brave men, living and dead, who struggled here,
// have consecrated it, far above our poor power to add or detract. The world will
// little note, nor long remember what we say here, but it can never forget what
// they did here. It is for us the living, rather, to be dedicated here to the
// unfinished work which they who fought here have thus far so nobly advanced. It
// is rather for us to be here dedicated to the great task remaining before us --
// that from these honored dead we take increased devotion to that cause for which
// they gave the last full measure of devotion -- that we here highly resolve that
// these dead shall not have died in vain -- that this nation, under God, shall
// have a new birth of freedom -- and that government of the people, by the
// people, for the people, shall not perish from the earth.
// `);
// console.log(mm.makeText());
// console.log(mm);
