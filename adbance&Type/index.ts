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
 */

/**
 * 型キャスト
 */

/**
 * 関数オーバーロード
 */
