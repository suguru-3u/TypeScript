/**
 * Conditional Typeは、「条件型」とも呼ばれ、T extends U ? X : Yの様な形をとります。
 * 三項演算子みたいなもので、TがUのサブタイプである場合はXを返し、そうでない場合は、Yを返します。
 */

type Isnumber<T> = T extends number ? true : false;

type n1 = Isnumber<10>; // true
type n2 = Isnumber<"a">; // false
