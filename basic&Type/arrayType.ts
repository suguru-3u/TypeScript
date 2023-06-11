const personArray = {
  name: "Trou",
  age: 34,
  hobbies: ["Sports", "Cooking"],
};

// 文字列の配列の型推論を行なってくれる
for (const hobby of personArray.hobbies) {
  console.log(hobby.toLocaleLowerCase);
}
