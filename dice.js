var numbers=[];
frequency=[0,0,0,0,0,0];

function generate() {
    for(i=0;i<10;i++){
        numbers.push(Math.floor(Math.random() * 6) + 1);
    }
}
generate();
console.log(numbers);


for(i=0;i<numbers.length;i++){
    var num=numbers[i];
    frequency[num-1]++;
}
for(i=0;i<frequency.length;i++){
    console.log("Frequency of "+(i+1)+": "+frequency[i]);
}
