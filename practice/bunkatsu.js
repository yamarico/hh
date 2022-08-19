import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const myProfile = {
//   name: "じゃけぃ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です. 年齢は${myProfile.age}歳です.`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です.年齢は${age}歳です.`;
// console.log(message2);

const myProfile = ["shuhei", 21];

const message3 = `名前は${myProfile[0]}です. 年齢は${myProfile[1]}です}`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です. 年齢は${age}歳です.`;
console.log(message4);
