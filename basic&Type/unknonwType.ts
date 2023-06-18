// 最終的にどの型になるかわからない時に使用
let userInput: unknown;
let userName: string;

// unknonw型にはなんでも入れることができる
userInput = 7;
userInput = "10";

// userName = userInput; unknown型を他の方に入れることはできない（any型なら可能）
// 型の保証を行うとエラーは発生しない
if (typeof userInput === "string") {
  userName = userInput;
}

// anyよりもunknown型を使用した方がいい。any型は型をチェックしないから
