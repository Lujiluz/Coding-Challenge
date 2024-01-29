function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return Array.from(dna)
    .map((molecule) => (molecule == 'T' ? 'U' : molecule))
    .join('');
}

// Done by me🫡

// Best practice
function bestPractice(dna) {
  return dna.replace(/T/g, 'U');
  // replace string of dna if it contains T.
  // It's using regular expression (Regex) which:
  // /T/g. /T for the char 'T', and 'g' for the global flag that means it will change every 'T' that pops out, not just the first one.
}

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));
