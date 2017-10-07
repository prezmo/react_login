const users = [
  { email: 'user@example.pl', password: 'Password123' }
]

async function doLogin(payload) {
  return await new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (users.find(user => user.email === payload.email)) {
        resolve(`${ payload.email }`);
      } else {
        reject(`User: ${payload.email} not found`);
      }
    });
  })
}

export {
  doLogin,
};
