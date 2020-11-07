const {POPULATION} = require('../../Data');
//  Roulette wheel selection
function rouletteSelection(individuals){
    //  NOTE:   javaScript past reference of object (and arrays) by default
    let individualsCopy = individuals.map(ind => Object.assign({},ind)); // This line copy the individuals because individuals is array of objects. 
    const totalFitness = calculateTotalFitness(individualsCopy);
    calculateProbability(individualsCopy, totalFitness);
    return selection(individualsCopy);
}

//  Calculating Sum of all Fitnesses
function calculateTotalFitness(individuals){
    let totalFitness = 0;
    for(let i=0; i<individuals.length; i++){
        totalFitness += individuals[i].fitness;
    }
    return totalFitness;
}

//  Calculating Selection Probability for each individual
function calculateProbability(individuals, totalFitness){
    let totalProbability = 0;
    for(let i=0; i<individuals.length; i++){
        individuals[i].probability = totalProbability + (individuals[i].fitness / totalFitness);
        totalProbability += individuals[i].probability;
    }
}

//  Selecting parents appropriate to the individual's fitness
function selection(individuals){
    let parents = [];
    let random;
    for(let i=0; i<POPULATION; i++){
        random = Math.random();
        for(let j=0; j<individuals.length; j++){
            if(individuals[j].probability >= random){
                parents.push({cycle: individuals[j].cycle, cost: individuals[j].cost}); //  Only cycle and cost needed for parents
                break;
            }
        }
    }
    return parents;
}

module.exports = rouletteSelection;