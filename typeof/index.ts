/**
 * typeof
 * typeof演算子は今回のarrayをnumArrayに当てはめた様に、
 * 自分で型定義を書かなくても既にある変数の型を抜き出して使える。
 * keyofと一緒に使われるか型ガードに使用されている模様
 */

const array = [1, 2, 3, 4, 5];
type numArray = typeof array;

const numArray2: numArray = [6, 7, 8, 9, 10];
// const strArray: numArray = ["1", "2", "3"]; 型エラーが発生する。

// 使い方①
const jsonData1 = {
  name: {
    fristName: "John",
    lastName: "Tanaka",
  },
  age: 13,
  adress: "tokyo",
};

const jsonData2 = {
  name: {
    fristName: "John",
    lastName: "Tanaka",
  },
  age: 13,
  adress: "tokyo",
  from: "Japan",
};

function getPersonDate(persionId: number) {
  return persionId === 1 ? jsonData1 : jsonData2;
}

const resPersonData = getPersonDate(2);
type personType = typeof resPersonData; // 引数に指定したjsonの型になっている

// 使い方②
const jsonData3 = {
  name: {
    keyName: "John",
    nicName: "Tanaka",
  },
  adress: "tokyo",
};

function clonePerson(person: typeof jsonData3): typeof jsonData3 {
  return { ...person };
}

const clonedPerson = clonePerson(jsonData3);

// 使い方③
// 配列の値をString Literal Typesとして使うケース
const size = ["small", "medium", "large"] as const; // readonly ["small", "medium", "large"]
type Size = (typeof size)[number]; // 'small' | 'medium' | 'large'
