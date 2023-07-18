/**
 * 交差型
 * 複数の方を結合することができる
 * typeだけでなく、interfaceでも使用することができる
 */

type Admin = {
  name: string;
  privilenges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElvetedEmployee = Admin & Employee;

const el: ElvetedEmployee = {
  name: "Max",
  privilenges: ["create-server"],
  startDate: new Date(),
};

type Combineble = string | number;
type Numeric = number | boolean;

// Union型を交差する場合、交差している型になる（この場合は、number）
type Universal = Combineble & Numeric;

/**
 * 型ガード
 */

function add3(a: Combineble, b: Combineble) {
  // 引数の型によって処理を変更している
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknowEmployee = Employee | Admin;

function printEmployeeInfo(em: unknowEmployee) {
  console.log(em.name);
  // プロパティの中身を保証している
  if ("privilenges" in em) {
    console.log("Privileges" + em.privilenges);
  }
}

class car {
  drive() {
    console.log("運転中..");
  }
}

class Truck {
  drive() {
    console.log("トラックを運転中..");
  }

  loadCargo(amount: number) {
    console.log("荷物を乗せています", +amount);
  }
}

type Vehicle = car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // class判定をしている
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(300);
  }
}

/**
 * 判別されるUnion型
 * 型に判別できる情報を記載して、型判別を行えるようにしている
 */

interface Bird {
  // birdという文字列のみ許可されるリテラル型
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  // horseという文字列のみ許可されるリテラル型
  type: "horse";
  runnningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if (animal.type === "bird") {
    console.log(animal.flyingSpeed);
  }
  if (animal.type === "horse") {
    console.log(animal.runnningSpeed);
  }
}

/**
 * 型キャスト
 * 書き方が2通り存在する
 * 型を強制的に宣言し、TypeScriptに型を認識させる方法
 */

// const userInputElement = <HTMLInputElement>document.getElementById(
//   "use-input"
// );

// const userInputElement = document.getElementById(
//   "use-input"
// ) as HTMLInputElement;

const userInputElement = document.getElementById("use-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "こんにちわ";
}

/**
 * 関数オーバーロード
 * 型推論が正しく動作しない場合に役に立つ
 */

// 対象の関数の前に関数の型を定義する
function add4(a: number, b: number): number;
function add4(a: string, b: string): string;

// ↑で型を定義しているので、戻り値の方がはっきりとなる
function add4(a: Combineble, b: Combineble) {
  // 引数の型によって処理を変更している
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add4("Hello", "こんにちわ");

/**
 * オプショナルチェーン
 * プロパティが存在しているのかわからない場合に使用できる
 * 存在しているか怪しいプロパティの前に[?]を置き、undefindやnullの場合アクセスしない
 */

const fetchedUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developer",
    description: "TypeScript",
  },
};

console.log(fetchedUserData?.job?.title);

/**
 * NULL合体演算子
 */

const userinpt = null;

// 論理演算子（空文字や0もfalse判定されてしまう）
const storeData = userinpt || "DEFAULT";

// userinptがnullかundefindだった場合のみfalse判定される
const storeData2 = userinpt ?? "DEFAULT";
