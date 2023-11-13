/**
 * 基本的なオブジェクトの型定義
 * readonlyのプロパティは読み取り専用
 * ?はundefindも可
 */

const baseObjectVariable: {
  name: string;
  readonly age: number;
  nickname?: string;
} = {
  name: "John",
  age: 87,
};

/**
 * インデックスシグネチャ（index signature）
 * オブジェクトに使用することができる型定義の方法。
 * keyは任意な名前で型を定義する
 * 以下の例だと、文字列のプロパティで値が数字の型のプロパティを任意な数だけ定義することができることを意味している
 */

type indexSignature = {
  [key: string]: number;
};

const indexSignatureVariable: indexSignature = {
  age: 27,
  adress: 123897,
  telehone: 908888888,
  //   str: "908888888", 文字列はエラーが起きる
};
