/**
 * ジェネリクスはTSのみの機能
 */

// ジェネリックは型補完を行うことができる。
const names: Array<string> = ["Max", "Manuel"];

// 戻り値をstringに指定いているので、後続でstringの文字列を使用することができる
const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("終わりました");
  }, 2000);
});

// stringのメソッドが使用できる
promise.then((data) => {
  data.split(" ");
});

// 独自のジェネリック関数
// 関数呼び出し時に型が決まる
function merge<T extends {}, U>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

// 引数からTSが型を推論してくれる
const mergedObj = merge({ name: "Max" }, { age: 25 });
// 型の制限をきつく行っていないので、異なるプロパティを持つオブジェクトを引数にすることができる
const mergedObj2 = merge({ name: "Max", yes: "yes" }, { age: 25 });

console.log(mergedObj.age);

// Genericsに制約を追加する
// TとUはobjectの型であることを指定しているまた、T or Uどちらかに型の制約をつけることができる
function merge2<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObj3 = merge2({ name: "Max", yes: "yes" }, { age: 25 });

console.log(mergedObj.age);

// もう一つのGenerics関数
interface Length {
  length: number;
}

// lengthがあるstring,Array型かどちらかであれば許可する型制限を緩く行っている
function countAndDescribe<T extends Length>(element: T): [T, string] {
  let descriptionText = "値がありません";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "です";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("お疲れ様"));
