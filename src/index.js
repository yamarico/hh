import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//
// const myProfile = {
//   name: "じゃけぃ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です. 年齢は${myProfile.age}歳です.`;
// console.log(message1);

// const myProfile = ["shuhei", 21];

// const message3 = `名前は${myProfile[0]}です. 年齢は${myProfile[1]}です.`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です. 年齢は${age}歳です.`;
// console.log(message4);

/**
 * デフォルト値, 引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
sayHello();

/**
 * スプレット構文...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー, 結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * マップやフィルターを使った配列の処理
 */
const nameArr = ["田中", "山田", "shuhei"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// nameArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぃ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件trueの時 : 条件がfalseのとき.
// const val1 = 1< 0 ? 'trueです.' : 'falseです.';
// console.log(val1);

// const num = "1300";

// const formattedNum = typeof num === 'number' ?  num.toLocaleString() :'数値を入力してください'
// console.log(formattedNum);
// console.log(num.toLocaleString());

// const checkSum = (num1, num2) =>{
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50 ,40));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります. ");
// }

// if(flag1 && flag2){
//   console.log("1か2はtrueになります. ");
// }

// ||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

const num2 = 100;
const fee2 = num && "なにか設定されました";
console.log(fee);
