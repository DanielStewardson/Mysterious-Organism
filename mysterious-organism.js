//-------------------------- Mysterious Organism -----------------------------//
//Codecademy project


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  //-------------------------- Specimen object factory ----------------------------//
  
  const pAequorFactory = (specimenNum, dna) => {
    return sample = {
      specimenNum: specimenNum,
      dna: dna,
  
      mutate() {
        const num = Math.floor(Math.random() * this.dna.length)
        let base = returnRandBase();
        while (base === dna[num]) {
          base = returnRandBase();
          };
          dna[num] = base;
          return this.dna;
      },
      compareDNA(object) {
        let same = 0;
        for (let i = 0; i <= this.dna.length-1; i++) {
          if (this.dna[i] === object.dna[i]) {
            same += 1;
          }
        }
        const percentage = (same/this.dna.length) * 100;
        console.log(`Specimen ${this.specimenNum} and specimen ${object.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`);
      },
      willLikelySurvive() {
        let baseCG = 0;
        this.dna.forEach(item => {
          if (item === 'C' || item === 'G'){
            baseCG += 1;
          }});
        return (baseCG/this.dna.length)*100 >= 60;
        }
    };
  };
  
  //-Extra function to generate a required number of samples that would survive, using the factory func -----//
  
  const pAequorSurviveGenerator = num => {
    const pAequorSurvive = [];
    let sampleNum = 1;
    while (pAequorSurvive.length < num) {
      let sample = pAequorFactory(sampleNum, mockUpStrand());
      if (sample.willLikelySurvive()) {
        pAequorSurvive.push(sample)
      }
      sampleNum++;
    }
    return pAequorSurvive;
  };
  
  //-------- Call sample generator for 30 samples that survive and store in array -----//
  
  const pAequorTestSamples = pAequorSurviveGenerator(30);
  
  // console.log(pAequorTestSamples);
  
  
  //------------------------------ Tests ------------------------------------//
  
  // const test = pAequorFactory(1, mockUpStrand());
  // const test2 = pAequorFactory(2, mockUpStrand());
  
  // console.log(test.specimenNum);
  // console.log(test.dna);
  // console.log(test2.specimenNum);
  // console.log(test2.dna);
  
  // console.log(test.mutate());
  
  // test.compareDNA(test2);
  // console.log(test.willLikelySurvive())
  // console.log(test2.willLikelySurvive())
  
  
  
  
  
  
  
  
  
  
  