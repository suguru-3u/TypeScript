class Department {
  // デフォルトはパブリック。publicの指定は不要(class外からアクセス可能)
  public name: string;

  // class内でしかアクセスできなくなる
  private employes: string[] = [];

  constructor(name: string) {
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
}

const accounting = new Department("Accounting");
accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Mamu");

accounting.printEmplyoleeInfo(); // Max,Mamus

// accounting.employes[2] = "taro";
