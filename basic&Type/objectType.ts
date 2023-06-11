// 明示的にobjectの型を指定する方法(基本的にはTSに型推論を使用する)
const person: {
  name: string;
  age: number;
} = {
  name: "Trou",
  age: 34,
};

// console.log(person.fistnanme); 存在しないプロパティにアクセスしようとするとTSがエラーを出してくれる
