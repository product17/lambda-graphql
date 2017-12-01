const promisify = newFunc => new Promise((resolve, reject) => {
  newFunc((error, result) => {
    console.log(error, result);
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

export default promisify;
