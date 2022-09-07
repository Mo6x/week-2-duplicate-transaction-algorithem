// function findDuplicateTransactions(transactions) {}

// export default findDuplicateTransactions;


//Find all transactions that have the same `sourceAccount`, `targetAccount`, `category`, `amount`, and the `time`
//difference between each consecutive transaction is less than 1 minute and put them in groups.


function findDuplicateTransactions (transactions) {

  // Check transaction empty or not
  if(transactions === null || transactions === ""){
    throw new Error ('Invalid transaction');
  }

  let transactionArray= [...transactions];

  // Check type of transaction
if(typeof transactionArray !== "object"){
    throw new Error ("Invalid Input");
}

// Check and compare time transaction was made
  transactionArray.sort((a, b) => new Date(a.time) - new Date(b.time));
  let duplicates = []
  let match = []
  let src, dst;
  while(transactionArray.length > 1){
    src = 0
    dst = 1
    match = [src]
    while ((new Date(transactionArray[dst].time) - new Date(transactionArray[src].time)) <= 60000 && src < transactionArray.length -1){
      if(compare_equal(transactionArray[src], transactionArray[dst])){
        match.push(dst)
        src = dst
      }
      dst += 1
      if (dst === transactionArray.length){
        break
      }
    }

    if (match.length > 1){
      let temp = []
      while(match.length){
        let item = transactionArray.splice(match.pop(), 1)
        temp.unshift(item[0])
      }
      duplicates.push(temp)
      match = []
    } else{
      transactionArray.shift()
    }

    if (transactionArray.length == 1){
      break;
    }

  }
  return duplicates
}

//helper functionto check equality
function compare_equal(t1,t2){
  if (t1.sourceAccount === t2.sourceAccount && t1.targetAccount === t2.targetAccount && t1.amount === t2.amount && t1.category === t2.category){
    return true;
  }else{
    return false;
  }
}

export default findDuplicateTransactions;


