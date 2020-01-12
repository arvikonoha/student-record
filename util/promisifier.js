module.exports = (nonPromiseFunction => {
  return async function (...rest) {
    nonPromiseFunction(...rest, (err, ...results) => {
      if (err)
        return Promise.reject(err)
      else
        return Promise.resolve(...results)
    })
  }
})