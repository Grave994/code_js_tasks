//1.
let balance = 30;
let guitar_price = 680;
if (balance >= guitar_price) {
    balance -= guitar_price;
    console.log("Məhsul alındı.");
    console.log(`Qalan balans: ${balance}`);
}else{
    console.log("Balansınız kifayət deyil.");
    console.log(`Çatışmayan məbləğ : ${guitar_price-balance}`);
}

//2.
var price = 120;
var customer_status = "standart"
var customer_status = "VIP"
if (customer_status == "standart") {
    console.log(`Qiymət : ${price-price/5}`);
}else{
    console.log(`Qiymət : ${price}`);
}

//3.
const numeral = prompt("Ədəd daxil edin:")
if(numeral % 2 == 0) {
    console.log("Bu ədəd cütdür");
}else{
    console.log("Bu ədəd təkdir");
}

//4. 
const numeral1 = prompt("İlk ədədi daxil edin: ")
const nomeral2 = prompt("Sonrakı ədədi daxil edin: ")
const operator = prompt("Operator daxil edin: ")
if(operator === "+" ){
    console.log(Number(numeral1)+Number(nomeral2));
}else if (operator === "-") {
    console.log(numeral1-nomeral2);
}else if (operator === "*") {
    console.log(numeral1*nomeral2);
}else if (operator === "/") {
    console.log(numeral1/nomeral2);
}

//5.

const userName = prompt("İstifadəçi adı daxil edin: ")
const password = prompt("Parol daxil edin: ")
if (userName == "user.ddd" ) {
    console.log("Yanlış istifadəçi adı");
}else if (password== "admin.admin") {
    console.log("Yanlış şifrə");
}
else{
    console.log("Giriş uğurludur");
}

//6.

const temperature = prompt("Temperaturu daxil edin: ");

if (temperature < 0) {
    console.log("Soyuq Hava");
}else if(temperature > 0 && temperature < 25){
    console.log("Mülayim Hava");
}else if (temperature >= 25 ) {
    console.log("İsti Hava");    
}

//7.

const a = Number(prompt("Birinci ədədi daxil edin: "));
const b = Number(prompt("Ikinci ədədi daxil edin: "));
const c = Number(prompt("Üçüncü ədədi daxil edin: "));
let max;

if (a > b && a > c) {
    max = a;
    console.log("Ən böyük ədəd: "+max);
}else if(b > a && b > c){
    max = b;
    console.log("Ən böyük ədəd: "+max);
}else{
    max = c;
    console.log("Ən böyük ədəd: "+max);
}