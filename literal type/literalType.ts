/**
 * literal型とは、値そのものを型としてしている方法
 * 厳密に型指定していると言える
 */

function conbine2(
  input1: string | number,
  input2: string | number,
  resultConvertion: "as-number" | "as-text" // literal型
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvertion === "as-number"
  ) {
    return +input1 + +input2;
  }
  return input1.toString() + input2.toString;
}

console.log("関数実行結果", conbine2(2, 3, "as-number"));
console.log("関数実行結果", conbine2("田中", "圭", "as-text"));

// 他にはこのようにconstの再代入不可の変数に詳細な型定義を行なっている場合も該当する
const booleanLiteral: true = true;
