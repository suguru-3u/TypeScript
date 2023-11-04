/**
 * keyofとは？
 * オブジェクト型に対して使うことで、そのオブジェクトのすべてのキーを文字列リテラル型のUnion型として取得することができる。
 * またtypeofと併用して使うことで、より型を安全に使用することができる
 */

// 例1

type Person = {
  name: string;
  age: number;
  sex: string;
};

type keyofPerson = keyof Person; // "name" | "age" | "sex"の型になる

/**
 * 例2
 * getProperty 関数はオブジェクトとキーを受け取り、そのキーのプロパティ値を返します。
 * keyof を使っているので無効なキーを渡すとコンパイル時にエラーが発生します。
 * これによって安全にプロパティを参照できるようになっています。
 */

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Taro",
  age: 30,
  sex: "men",
};

const name1 = getProperty(person, "name"); // OK
const age2 = getProperty(person, "age"); // OK
// const invalid3 = getProperty(person, "invalid"); Error: Argument of type '"invalid"' is not assignable to parameter of type 'keyof Person'.
