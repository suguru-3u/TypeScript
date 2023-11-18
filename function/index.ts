/**
 * functionは引数には型を明示的に指定し、戻り値はTypeScritpに型を推論してもらう
 */

function functionType(str: string, num = 1) {
  console.log("str文字", str);
  console.log("num数字", num);
  console.log("num数字のデフォルト値", num);
}

functionType("str文字");
functionType("str文字", 3);
