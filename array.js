/*let heroes=["ironman","thor","hulk","spiderman","antman","shaktiman"]
for(let i=0;i<heroes.size();i++){
    console.log(heroes[i])
}

let marks =[1,1,1,1,1,1]
let sum = 0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
let average = (sum)/marks.length;
console.log(average);*/
let marks = [100,200,300,400,500];
let marks2=[1,2,3,4,5,6];
let ans =marks.concat(marks2);
marks.push(600);
marks.pop();
console.log(ans);
console.log(marks);
