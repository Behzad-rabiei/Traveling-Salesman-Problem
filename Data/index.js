const fs = require('fs');   
const path = require('path');

const NODES = 26;  // Lower bound equals to number of nodes
const POPULATION = 10 //  It represent amount of individuals that we have

const adjacencyMatrix = createMatrix(NODES);    //  create adjacency matrix

//  Create empty n*n array
function createMatrix(n){
    return Array(n).fill().map( ()=> Array(n)); 
}  

//  Fill adjacency matrix 
function fillMatrix(array){
    for(let i=0,k=0; i<adjacencyMatrix.length; i++){
        for(let j=0; j<adjacencyMatrix[i].length; j++,k++){
            adjacencyMatrix[i][j] = parseInt(array[k]);
        }
    }
}

//  Read adjacency matrix data from adjacencyMatrix.txt 
//  And convert Data to String then splits the data at every kind of whitespace character
//  Note: /\s/ splits the array at every kind of whitespace character
const filePath = path.join(__dirname, 'adjacencyMatrix.txt');   
fillMatrix(fs.readFileSync(filePath).toString().split(/\s+/)); 

module.exports = {
    NODES,
    POPULATION,
    ADJACENCY_MATRIX: adjacencyMatrix
};