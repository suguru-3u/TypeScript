// https://typescriptbook.jp/reference/values-types-variables/tuple
// note.affi-sapo-sv.com/typescript-tuple-types.php
// Tupleは、JSには存在しないTSにしか存在しない
// 配列の中身を要素の数を厳密に定義することができる
// 使う場面はPromise.allなど並行処理を実施した際など..?

https: const personTuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //これがTuple型 一つ目はnumber,　二つ目はstringでなければいけなくなる
} = {
  name: "Trou",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// Tuple型を定義する前
// 今のままだとroleに追加の値を代入できてしまう
// personTuple.role.push("admin");
// personTuple.role[1] = 10;

// Tuple型を定義した後
// personTuple.role.push("admin"); Tuple型はpushは許可してしまう
// personTuple.role[1] = 10; エラーが発生
// personTuple.role = [2,"admin",3] 要素の数が多くてもエラーが発生する

function tupleFunction(): [number, string, boolean] {
  return [1, "string", true];
}

// type型を定義しているので、それぞれの要素のメソッドを使用することができる
const tupleList = tupleFunction();
console.log(tupleList[0].toFixed);
console.log(tupleList[1].toLocaleLowerCase);

// readOnlyを使用することで読み込み専用にすることができる
let tuple: readonly [number, string] = [1, ""];
// tuple[0] = 1; エラー発生
// tuple = [10, ""]; しかし変数自体は上書き可能

// スプレット構文を使用することで可変長なTuple型を指定できる
// しかし可変長の箇所から型チェックはされない(この場合だと添字1から型チェックはされない)
let tuple2: [number, ...string[], boolean] = [1, "", "", "", true];

// tuple型内でtuple型を定義
type a = [string, number];
type b = [string, ...number[]];
let tuple3: [...a, ...b];
