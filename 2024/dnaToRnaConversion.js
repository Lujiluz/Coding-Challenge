function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return Array.from(dna)
    .map((molecule) => (molecule == 'T' ? 'U' : molecule))
    .join('');
}

// Done by me🫡

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));
