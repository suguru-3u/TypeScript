/**
 * エイリアス型は、型定義をいつでもどこでも定義することができる！
 */

type Combineable = string | number;
type conversionDescripter = "as-number" | "as-text";

function conbine3(
  input1: Combineable,
  input2: Combineable,
  resultConvertion: conversionDescripter
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
