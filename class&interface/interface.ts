/**
 * 構造の設計を行うことができる
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
