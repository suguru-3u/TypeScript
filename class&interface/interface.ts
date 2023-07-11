/**
 * 構造の設計を行うことができる
 * TypeScriptにしかない機能
 */

// classだけでなく型の定義としても使用することができる。
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// Person型の使用を定義
let user1: Person;

// Person型通りにオブジェクトを代入する。
user1 = {
  name: "Trao",
  age: 27,
  greet(phrase: string) {
    console.log(`${phrase},こんにちは`);
  },
};

// クラスの設計図、実際の実装は記述することはできない
// 共通のクラスを複数作成することができる。
interface Greetable {
  greet(pharse: string): void;
}

interface Named {
  // 読 み取り専用（クラスのインスタンス作成時のみに値が代入される）
  readonly name: string;
  // ?をつけることで、このプロパティがなくてもいいことを定義している。（オプショナル）
  outputName?: string;
}

// interfaceは複数継承することができる
class Person2 implements Greetable, Named {
  name: string;
  age = 30;
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(pharse: string): void {
    if (this.name) {
      console.log(pharse);
    }
  }
}

const a = new Person2("Max");
a.name = "Max2";

// 関数の定義
// 関数名を記述していない（匿名関数）
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
