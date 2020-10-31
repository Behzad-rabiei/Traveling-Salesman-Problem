const {POPULATION, NODES, ADJACENCY_MATRIX}  = require('../Data/index');

class Individual  {  // Each individuals has fitness, cost of cycle, and cycle
    constructor(){
        this.cycle =[1];
        this.cost =0;
        this.fitness= 0;
    }
    calCost(){
        let preNode = 1;
        let nextNode = 1;
        let cost = 0;
        for(let i=1; i<this.cycle.length; i++){
            preNode = nextNode;
            nextNode = this.cycle[i];
            if(cost === 0){
                // TODO: This individual is invalid
            }
            cost = cost + ADJACENCY_MATRIX[preNode-1][nextNode-1];
        }
        this.cost = cost;
        this.fitness = 1/cost;
        console.log(this);
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
for(let i=0; i< individuals.length; i++){
    individuals[i].calCost();
}

module.exports = individuals;