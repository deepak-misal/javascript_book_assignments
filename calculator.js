var students=[
{firstname:"abc",lastname:"xyz",cgpa:7},
{firstname:"aer",lastname:"ewrt",cgpa:8},
{firstname:"dsfg",lastname:"asg",cgpa:9},
{firstname:"ada",lastname:"rxyz",cgpa:6},
{firstname:"aeg",lastname:"ery",cgpa:7}
];
students.sort(function (a, b) {
    return a.cgpa - b.cgpa
})


var min = students[0].cgpa;
var max =students[students.length - 1].cgpa;
var sum=0;
var count=0;
for(i=0;i<students.length;i++){
    
    sum+=students[i].cgpa;
    count++;
}
var average=sum/5;
console.log("count: "+count);
console.log("average: "+average);
console.log("Minimum cgpa: "+min);
console.log("Maximum cgpa: "+max);
