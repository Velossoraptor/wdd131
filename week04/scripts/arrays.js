// const steps = ["one", "two", "three"];
// const listTemplate(step) {
//     return `<li>${step}</li>`;
// }
// const stepsHtml = steps.map(listTemplate());
// document.querySelector("#myList").innerHTML = stepsHTML.join();// set the innerHTML

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade){
    let points = 0;
    if (grade === 'A'){
        points = 4;
    }else if (grade === 'B'){
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce((total, item) => total+item);
const gpa = pointsTotal / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longFruit = fruits.filter((fruit)=> fruit.length >= 6);

const nums = [12, 34, 21, 54];
const luckyNum = 21;
const indexOfNum = nums.indexOf(luckyNum);