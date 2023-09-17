/**
 * Asyanchronous
 *
 * learning site
 * https://typescriptbook.jp/reference/asynchronous/promise
 */

// ▫️usually callback fucntion

// API1. 非同期でAPIにリクエストを送って値を取得する処理
function request1(callback) {
  setTimeout(() => {
    // 1 は適当な例、なんでもいいです
    callback(1);
  }, 1000);
}

// API2. 受け取った値を別のAPIにリクエストを送って値を取得する処理
function request2(result1, callback) {
  setTimeout(() => {
    callback(result1 + 1);
  }, 1000);
}

// API3. 受け取った値を別のAPIにリクエストを送って値を取得する処理
function request3(result2, callback) {
  setTimeout(() => {
    callback(result2 + 2);
  }, 1000);
}

request1((result1) => {
  request2(result1, (result2) => {
    request3(result2, (result3) => {
      console.log(result3);
      // @log: 4
    });
  });
});

// ▫️ Promise Function

// 非同期でAPIにリクエストを投げて値を取得する処理
function promiseRequest1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function promiseRequest2(result2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result2 + 1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function promiseRequest3(result3) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result3 + 2);
    }, 1000);
  });
}
// 戻り値がPromiseになり、コールバック関数を示す引数がなくなりました。Promiseを返す関数を使うと次のようにみっつのAPIリクエストを実装できます。
// かなりスッキリ！

promiseRequest1()
  .then((result1) => {
    return promiseRequest2(result1);
  })
  .then((result2) => {
    return promiseRequest3(result2);
  })
  .then((result3) => {
    console.log(result3);
    // @log: 4
  });

// Promise and generics
// TypeScriptでPromiseの型を指定する場合はジェネリクスを伴いPromise<T>と書きます。TにはPromiseが履行された(fulfilled)ときに返す値の型を指定する。
// TypeScritpでPromiseを使用すると、戻り値のPromise<T>は必須となる

type User = {
  name: string;
  age: number;
};

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: "太郎",
      age: 10,
    };
    return resolve(user);
  });
}

getUser().then((user: User) => {
  console.log(user);
  // @log: { "name": "太郎", "age": 10 }
});

// ▫️
