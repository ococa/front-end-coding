class MyPromise {

  state: 'pending' | 'fulfilled' | 'rejected' = 'pending';

  callbacks: Function [] []= [];

  constructor(fn: (resolve: (message: any) => void, reject: (error: any) => void) => void) {
    fn(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve = (message: any) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      setTimeout(() => {
        this.callbacks.forEach(fns => {
          fns[0] ? fns[0].call(this, message) : null;
        })
      }, 0)
    }
  }

  reject = (error: any) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      setTimeout(() => {
        this.callbacks.forEach(fns => {
          fns[1] ? fns[1].call(this, error) : null;
        })
      }, 0)
    }
  }

  then = (onFulfilled: (message: any) => void, onRejected?: (error: any) => void) => {
    const callback = [ onFulfilled ]
    onRejected && callback.push(onRejected)
    this.callbacks.push(callback)
  }

  catch = (onError: () => void) => {

  }
}

const promiseTest = (type: 'promise' | 'myPromise' = 'myPromise', result: number[] = [])  => {
  // const result = [];
  const MyPromise1 = type === 'promise' ? Promise : MyPromise;
  const a = new MyPromise1((resolve, reject) => {
    result.push(1);
    resolve(2);
    result.push(9)
  })
  a.then((res) => {
    result.push(res);
  })
  a.then(res => {
    result.push(res + 1);
    return this;
  })
  console.log('a', a);
  return result;
}



export default MyPromise;

export {
  promiseTest
}
