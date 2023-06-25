class Department {
  // private id: string;

  // デフォルトはパブリック。publicの指定は不要(class外からアクセス可能)
  // readonlyを付与することで読み取り専用にすることができる
  public readonly name: string;

  // class内と継承したクラスは使用することができる
  protected employes: string[] = [];

  // プロパティ初期化のショートカット：id
  // コンストラクタの引数内にアクセス修飾子を入れることで、定義を省略することができる
  constructor(private id: string, name: string) {
    this.name = name;
  }

  // thisは何を参照するのか、引数にthisを使って指定することができる
  // Department型を参照するように指定している
  describe(this: Department) {
    // thisは呼び出し元を参照する。
    console.log("Department: ", this.name);
  }

  addEmployee(employee: string) {
    this.employes.push(employee);
  }

  printEmplyoleeInfo() {
    console.log(this.employes);
  }

  addEmplypp(name: string) {}
}

const accounting = new Department("1", "Accounting");
accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Mamu");

accounting.printEmplyoleeInfo(); // Max,Mamus

// accounting.employes[2] = "taro";

class ITDepartMent extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  // メソッドをオーバーライドする場合は引数は合わせる必要がある
  addEmployee(employee: string) {
    if (employee === "Max") {
      this.employes.push(employee);
    }
  }
}

const itAccounting = new ITDepartMent("d1", ["Max"]);
