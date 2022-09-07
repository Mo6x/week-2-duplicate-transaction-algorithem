/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
};

// const MATCH_PROPERTIES = ['sourceAccount', 'targetAccount', 'amount', 'category'];

// // Helper Functions
// // Comparing the elements of object
// const compareTransaction = (transaction1, transaction2, transactionObject) => transactionObject.every(object => transaction1[object] === transaction2[object]);
// // Checking for transaction less than 1 minute
// const isOneMinute = (transaction1, transaction2) => Math.abs(new Date(transaction1.time) - new Date(transaction2.time)) < 60000;
// // Checking for Duplicate transaction within 0 - 59 seconds
// const isDuplicate = (transaction1, transactions2) => compareTransaction(transaction1, transactions2, MATCH_PROPERTIES) && isOneMinute(transaction1, transactions2);

// function groupDuplicateTransactions(duplicates) {

//   const subArrays = [];

//   for(let index = 1, previousDuplicate = false, duplicateIndex = -1; index < duplicates.length; index++) {
//     if(isDuplicate(duplicates[index], duplicates[index - 1])) {

//       if(!previousDuplicate) {
//         duplicateIndex++;
//       }

//       if(!subArrays[duplicateIndex]) subArrays[duplicateIndex] = [];
//       subArrays[duplicateIndex].push(duplicates[index - 1]);

//       if(index === duplicates.length - 1) subArrays[duplicateIndex].push(duplicates[index]);
//       previousDuplicate = true;

//     } else {

//       if(previousDuplicate) subArrays[duplicateIndex].push(duplicates[index - 1]);
//       previousDuplicate = false;
//     }

//   }

//   return subArrays;

// }

// // Duplicate transaction function (MAIN FUNCTION)
// // Filtering the valid transactions and sorting transaction into group of objects
