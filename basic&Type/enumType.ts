// TS独自の機能
// enumは仕様が複雑ですし、実装の上で気をつけなければいけない
// ↑使用するならconst assertionの方がいいかも
// roleの値のadminが0, read only1, author2を仮に定義する

// const assetionを使用してみた例
// https://typescriptbook.jp/reference/type-reuse/keyof-type-operator#:~:text=keyof%20%E3%81%AF%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%9E%8B,name%22%20%E3%81%8C%E5%BE%97%E3%82%89%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82&text=2%E3%81%A4%E4%BB%A5%E4%B8%8A%E3%81%AE%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3,%E5%9E%8B%E3%81%A7%E8%BF%94%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82
// https://qiita.com/kiIAlmd2/items/2efe01a0fcb0651bbabe
const stats = {
  SUCCESS: 0,
  WARN: 1,
  ERROR: 2,
} as const;
type Status = (typeof stats)[keyof typeof stats];
function func(s: Status) {
  console.log(s);
}

// func(stats.SUCCESS); 0
// func(10); //Error

// enumを定義すると自動的に番号が採番される
// 数や文字列を定義することもできる
const enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

// 設定した値から自動的にインクリメントされる
// enum Role {
//     ADMIN = 5, // 5
//     READ_ONLY, // 6
//     AUTHOR, // 7
// }

// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY,
//   AUTHOR,
// }

const personEnum = {
  name: "Trou",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
