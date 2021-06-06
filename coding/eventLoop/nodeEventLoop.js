
let result = [];
// setTimeout(() =>{
  process.nextTick(function () {
    // console.log('3')
    result.push('3')
  })

  setTimeout(function () {
    // console.log('1')
    result.push('1');
    // process.nextTick(function () {
    //   console.log('4')
    // })
    // setImmediate(() => {
    //   console.log('5')
    // })
  }, 0)


  setImmediate(function () {
    // console.log('2')
    result.push('2');
  })

// } , 1000)
setTimeout(() => {
  console.log('result', result)

}, 100)

// 执行顺序不确定。。。。

