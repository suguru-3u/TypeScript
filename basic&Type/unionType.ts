/**
 * union型
 * 型に|を追加することで複数の方をor条件で指定することができる
 */

function conbine(input1: string | number, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return input1.toString() + input2.toString;
}

console.log("関数実行結果", conbine(2, 3));
console.log("関数実行結果", conbine("田中", "圭"));
