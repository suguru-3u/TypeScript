// メソッドにabstrcutを使用しているため、クラスにもabstrucをつける
abstract class Department {
  // private id: string;

  // デフォルトはパブリック。publicの指定は不要(class外からアクセス可能)
  // readonlyを付与することで読み取り専用にすることができる
  public readonly name: string;

  // protectedは、class内と継承したクラスは使用することができる
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

  // abstractをつけることで、継承元のクラスは絶対にこのメソッドを実装しなくれてはいけない
  abstract addEmployee(employee: string): void;
  // this.employes.push(employee);

  printEmplyoleeInfo() {
    console.log(this.employes);
  }

  addEmplypp(name: string) {}
}

// extendsを使用しクラスを継承している
class ITDepartMent extends Department {
  private lastReport: string;

  // staticを修飾子につけることで、インスタンスを作らなくても参照することができる。
  // クラス変数という、メソッドにも同様なことを行うことができる
  static test = "test";

  // プロパティのgetterメソッド
  // 取得することに特化しているので、複雑なロジックを入れることが可能
  get mostRecentReport() {
    return this.lastReport;
  }

  // プロパティのsetterメソッド
  // セットすることに特化しているので、複雑なロジックを入れることが可能
  set mostRecentReport(report: string) {
    this.mostRecentReport = report;
  }

  constructor(id: string, lastReports: string[]) {
    super(id, "IT");
    this.lastReport = lastReports[0];
  }

  // メソッドをオーバーライドする場合は引数は合わせる必要がある
  addEmployee(employee: string) {
    if (employee === "Max") {
      this.employes.push(employee);
      this.lastReport = employee;
    }
  }
}

const testStatic = ITDepartMent.test;

const itAccounting = new ITDepartMent("d1", ["Max"]);
console.log(itAccounting.mostRecentReport);

class Test {
  private name: string;

  // このクラスの情報を保持するようにする
  private static instance: Test;
  // シングルトーンパターン(constructorにprivateをつける)
  // インスタンスを複数作れないようにする
  private constructor() {
    this.name = "田中";
  }

  // インスタンスを返却する
  static getInstnce() {
    if (Test.instance) {
      return this.instance;
    }
    this.instance = new Test();
    return this.instance;
  }
}

// newを使用せずにインスタンスを作成するので、インスタンスは常に1つ。
const accountTest = Test.getInstnce();
