/**
 * 戻り値は関数の引数に型指定することで定義することができる。
 * 基本型推論してくれるので、型定義する必要はない。(複雑な型であれば定義が必要)
 */
function add3(n1: number, n2: number): number {
  return n1 + n2;
}

// 関数自体の型
let conbineValue: (a: number, b: number) => number;

// 何も指定しないとany型となってしまう。
// 値を明示的に指定する必要がある。(関数の型を定義する。)
conbineValue = add3;

console.log(conbineValue(3, 4));

// コールバック関数の型定義
function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  const result = n1 + n2;
  cd(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
