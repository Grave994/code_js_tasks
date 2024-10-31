//Task 1. Regular
// function calculatedAverage(arr) {
// let nums = [5, 2, 8, 4, 6, 43, 34];
// console.log("Minimum: ", Math.min(5, 2, 8, 4, 6, 43, 34));
// console.log("Maximum: ", Math.max(5, 2, 8, 4, 6, 43, 34));
// let sum = 0;
// let count = 0;
// min = Math.min(5, 2, 8, 4, 6, 43, 34)
// max = Math.max(5, 2, 8, 4, 6, 43, 34);

// for (let i = 0;  i < nums.length; i++) {
//     sum += nums[i];
//     count ++ ;
    
// }
// return  sum/count;
// }

// console.log(calculatedAverage());

//Anonymous
// const calculatedAverageAnonymous = function() {
//     let nums = [5, 2, 8, 4, 6, 43, 34];
//     console.log("Minimum: ", Math.min(5, 2, 8, 4, 6, 43, 34));
//     console.log("Maximum: ", Math.max(5, 2, 8, 4, 6, 43, 34));
//     let sum = 0;
//     let count = 0;
//     min = Math.min(5, 2, 8, 4, 6, 43, 34)
//     max = Math.max(5, 2, 8, 4, 6, 43, 34);
    
//     for (let i = 0;  i < nums.length; i++) {
//         sum += nums[i];
//         count ++ ;
        
//     }
//     return  sum/count;
// }
// console.log(calculatedAverageAnonymous());

//Arrow
// const calculatedAverageArrow = () => {
//     let nums = [5, 2, 8, 4, 6, 43, 34];
//     console.log("Minimum: ", Math.min(5, 2, 8, 4, 6, 43, 34));
//     console.log("Maximum: ", Math.max(5, 2, 8, 4, 6, 43, 34));
//     let sum = 0;
//     let count = 0;
//     min = Math.min(5, 2, 8, 4, 6, 43, 34)
//     max = Math.max(5, 2, 8, 4, 6, 43, 34);
    
//     for (let i = 0;  i < nums.length; i++) {
//         sum += nums[i];
//         count ++ ;
        
//     }
//     return  sum/count;
// }
// console.log(calculatedAverageArrow());


//Task 3. Regular
// function getStudentInfo(name, age, marks) {
//     let result = ` ... ${name}!   `
//     marks = [0, 78, 0, 0, 79];
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//        sum += marks[i];
//     }
//     let average = sum / marks.length
//     if (average > 80) 
//         result = result.replace("...", "Təbriklər, Yüksək nəticə ilə keçdiniz")
//     else if (average >= 50 && average <= 80) 
//         result = result.replace("...", "Afərin, Siz keçdiniz")
//     else
//         result = result.replace("...", "Kəsriniz var")
//         return result
// }
// console.log(getStudentInfo("Elnur", "18"));

//Anonymous
// const getStudentInfoAnonymous = function(name, age, marks) {
//     let result = ` ... ${name}!   `
//     marks = [0, 78, 0, 0, 79];
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//        sum += marks[i];
//     }
//     let average = sum / marks.length
//     if (average > 80) 
//         result = result.replace("...", "Təbriklər, Yüksək nəticə ilə keçdiniz")
//     else if (average >= 50 && average <= 80) 
//         result = result.replace("...", "Afərin, Siz keçdiniz")
//     else
//         result = result.replace("...", "Kəsriniz var")
//         return result
// }
// console.log(getStudentInfoAnonymous("Elnur", "18"));

// Arrow
// const getStudentInfoArrow = (name, age, marks) =>{
//     let result = ` ... ${name}!   `
//     marks = [0, 78, 0, 0, 79];
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//        sum += marks[i];
//     }
//     let average = sum / marks.length
//     if (average > 80) 
//         result = result.replace("...", "Təbriklər, Yüksək nəticə ilə keçdiniz")
//     else if (average >= 50 && average <= 80) 
//         result = result.replace("...", "Afərin, Siz keçdiniz")
//     else
//         result = result.replace("...", "Kəsriniz var")
//         return result
// }
// console.log(getStudentInfoArrow("Elnur", "18"));

//Task 4. Regular
// function clearArrey(array, numbers) {
//     let nums = [21, 4, 67, 90, 313];
//     let newNums = [];
//     let numbers = prompt("")
   
// }

//Task 6. Regular
// function convertArrey() {
//     let originArrey = [101, 34, 6, 45];
//     let newArrey = [];
//     for (let i = originArrey.length-1; i >= 0 ; i--) {
//         newArrey += originArrey[i]
//     }
//     return newArrey
// }
// console.log(convertArrey());
//Anonymous
// const convertArreyAnonymous = function(){
//     let originArrey = [101, 34, 6, 45];
//     let newArrey = [];
//     for (let i = originArrey.length-1; i >= 0 ; i--) {
//         newArrey += originArrey[i]
//     }
//     return newArrey
// }
// console.log(convertArreyAnonymous());
//Arrow
// const convertArreyArrow =() => {
//     let originArrey = [101, 34, 6, 45];
//     let newArrey = [];
//     for (let i = originArrey.length-1; i >= 0 ; i--) {
//         newArrey += originArrey[i]
//     }
//     return newArrey
// }
// console.log(convertArreyArrow());


//Task 9. Regular
function calculatedSales(productName, stock, soldUnits ) {
    let remainProduct = stock - soldUnits
    if (soldUnits > stock) 
        console.log("Kifayət qədər məhsul yoxdur");
    else 
      return   `Qalan məhsul:${remainProduct}`;
}
console.log(calculatedSales("Top", 40, 24));

//Anonymous
const calculatedSalesAnonymous = function(){
    let remainProduct = stock - soldUnits
    if (soldUnits > stock) 
        console.log("Kifayət qədər məhsul yoxdur");
    else 
      return   `Qalan məhsul:${remainProduct}`;
}
console.log(calculatedSalesAnonymous("Top", 40, 24));  

//Arrow
const calculatedSalesArrow = () => {
    let remainProduct = stock - soldUnits
    if (soldUnits > stock) 
        console.log("Kifayət qədər məhsul yoxdur");
    else 
      return   `Qalan məhsul:${remainProduct}`;
}
console.log(calculatedSalesArrow("Top", 40, 24));
