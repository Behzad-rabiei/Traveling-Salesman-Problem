const {POPULATION, NODES, ADJACENCY_MATRIX}  = require('../Data/index');

class Individual  {  // Each individuals has cycle, cost of cycle, fitness
    constructor(){
        this.cycle =[1];    //  The start node of cycle is always 1
        this.cost =0;
        this.fitness= 0;    //  We have consider the fitness equal to 1/cost
    }
    //  Calling generate cycle and calculate cost of cycle
    generate(){
        this.generateCycle();
        this.calculateCost();
    }
    //  Generating the cycle 
    generateCycle(){
        const nodeRange = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
        let temp, index;
        for(let i=1; i<NODES; i++){
            temp = nodeRange[Math.floor(Math.random() * nodeRange.length)];
            this.cycle.push(temp);
            for(let i=0; i<nodeRange.length; i++)   {
                if(nodeRange[i]===temp) index=i;
            }
            nodeRange.splice(index,1);
        }  
    }
    //  Calculating the cost of cycle
    calculateCost(){
        let preNode = 1;    //  start node --> preNode
        let nextNode = 1;   //  next node --> nextNode
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
    }
};

//  Generating array of Individuals
let individuals = [];
for(let i=0; i<POPULATION; i++){
    individuals.push(new Individual);
    individuals[i].generate();
}

module.exports = individuals;