/**
 * function
 * 基本的に引数には型を明示的に指定し、戻り値はTypeScritpに型を推論してもらう
 */

// オプションパラメーターとデフォリトパラメーター
function functionType(str: string, num = 1, check?: boolean) {
  console.log("str文字", str);
  console.log("num数字", num);
  console.log("check真偽値", check);
  console.log("num数字のデフォルト値", num);
}

// オプションパラメーターの値は、引数に与えなくてもエラーにならない
functionType("str文字");
functionType("str文字", 3);

/**
 * レストパラメーター
 * 引数に...をつけることで連続する引数を配列として扱うことができる。
 * 複数の引数を使用する際は、レストパラメーターの引数は一番最後にしなければならない
 * またレストパラメーターの引数を複数設定することができない
 * 引数の型は同一にしないと、予期しない動作になる恐れがあるので気をつける
 * ※ 引数に配列を渡すと[][]を受け取ったと認識するので、配列を引数にする場合、スプレッド構文(...)を使用すること
 */
function restParameters(...num: number[]) {
  console.log("numの確認", num); // numは配列として扱われる
}

restParameters(1, 2, 3);

/**
 * thisの型付け
 */
function thisType();

//ジェネレーター、イテレーター

// 呼び出しシグネチャ

// オーバーロードされた型

// ポリモーフィズム

// ジェンリック型ポリモーフィズム

// 制限付きポリモーフィズム

// 複数の制約を持つポリモーフィズム

// ジェネリック型のデフォルト値
