// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    
    mutate() {
      const changedBaseIndex = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase()
      while (this.dna[changedBaseIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.dna[changedBaseIndex] = newBase
      return this.dna
    },

    compareDNA(pAequor) {
      let sameDNACount = 0
      for (let i = 0; i < this.dna.length - 1; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            sameDNACount ++
          } else {
            sameDNACount
          }
        
      }
      let commonPercentage = sameDNACount / this.dna.length * 100
      return `Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonPercentage}% DNA in common`
    },

    willLikelySurvive() {
      let CGCounter = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C') {
          CGCounter ++
        } 
        else if (this.dna[i] === 'G') {
          CGCounter ++
        }
        else {
          CGCounter
        }
      }
      
      const CGPercentage = CGCounter / this.dna.length * 100
      if (CGPercentage >= 60) {
        return true
      }
      else {
        return false
      }
    }

  }
}

const survivingPAequor = []
let specimenCounter = 1

while (survivingPAequor.length < 30) {
  let newPAequor = pAequorFactory(specimenCounter, mockUpStrand())
  if (newPAequor.willLikelySurvive()) {
    survivingPAequor.push(newPAequor)
  } 
  specimenCounter ++
}

// ex1 = ['C', 'T', 'T', 'A', 'G', 'C', 'C']
// ex2 = ['C', 'C', 'T', 'G', 'A', 'G', 'C']
// ex1Obj = pAequorFactory(1,ex1)
// ex2Obj = pAequorFactory(2,ex2)

// // console.log(ex1Obj)
// console.log(ex1Obj.willLikelySurvive())
// console.log(ex2Obj.willLikelySurvive())

console.log(survivingPAequor)












