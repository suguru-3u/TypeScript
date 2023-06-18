// 最終的にどの型になるかわからない時に使用
let userInput2: unknown;
let userName2: string;

// unknonw型にはなんでも入れることができる
userInput2 = 7;
userInput2 = "10";

// userName = userInput; unknown型を他の方に入れることはできない（any型なら可能）
// 型の保証を行うとエラーは発生しない
if (typeof userInput2 === "string") {
  userName2 = userInput2;
}

// anyよりもunknown型を使用した方がいい。any型は型をチェックしないから

//　値を返すことがないことはvoid、絶対に値を返すことがないのはnerver型
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
