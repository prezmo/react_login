async function doLogin(payload) {
  return await new Promise((resolve, reject) => {
    window.setTimeout(() => {
      console.log(payload);
      
      Math.random() > .5 ? resolve(`${ payload.email }`) : reject(`User: ${payload.email} not found`);
    }, 1000)
  })
}

export {
  doLogin,
};
