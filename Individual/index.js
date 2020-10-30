const {POPULATION, NODES, ADJACENCY_MATRIX}  = require('../Data/index');

//  Test ADJACENCY_MATRIX
/*
for(let i=0,k=0; i<ADJACENCY_MATRIX.length; i++){
    for(let j=0; j<ADJACENCY_MATRIX[i].length; j++,k++){
        console.log(`${i},${j} ${ADJACENCY_MATRIX[i][j]}`);
    }
}
*/

class Individual  {  // Each individuals has fitness, cost of cycle, and cycle
    constructor(){
        this.cycle =[1];
        this.cost =0;
        this.fitness= 0;
    }
};

//  Generate array of individual Objects
function generateIndividuals(){              
    for(let i=0; i<POPULATION; i++){
        individuals.push(new Individual);
        generateCycle(individuals[i]);
    }
}

//  Get a individual and generate cycle for that
function generateCycle(individual){     
    const nodeRange = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    let temp, index;
    for(let i=1; i<NODES; i++){
        temp = nodeRange[Math.floor(Math.random() * nodeRange.length)];
        individual.cycle.push(temp);
        for(let i=0; i<nodeRange.length; i++)   {
            if(nodeRange[i]===temp) index=i;
        }
        nodeRange.splice(index,1);
    }  
}

let individuals = []; 
generateIndividuals();

module.exports = individuals;