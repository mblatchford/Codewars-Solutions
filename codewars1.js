function order(words){
 if(words === ''){
    return words;

 }else{   
        
    console.log(words);

    // split input by word
    const wordArray = words.split(' ');
    console.log(wordArray);
    // search word for number
    const regex = /[0-9]/g;
    const found = words.match(regex);
    console.log(found);

    // associate number with word value New object?
    let wordOrder = [];
    for(let i = 0; i < found.length; i++){
        wordOrder.push({word:wordArray[i], order: found[i]});
    }
    console.log(wordOrder);

    // sort by number value
    const sorted = wordOrder.sort(function (a, b) {
        return a.order - b.order;
    });

    console.log(sorted);  

    let final = [];
    debugger;
    for (let j = 0; j < found.length; j++){ 

        final[found[j]]=(wordArray[j]);
    }
    final = final.join(" ");
    console.log(final);
    final.trim();
    return final;
    }
}

const test = "4of Fo1r pe6ople g3ood th5e the2";
order(test);

