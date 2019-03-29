const hooks = []

const onError = (onError) => {
  hooks.push(onError)
}

const handleError = (error) => {
  hooks.forEach(hook => hook(error))
  console.log('OTRN JS: There was an error: ', error);
};

const handleSignalError = (error) => {
  if (error) {
    hooks.forEach(hook => hook(error))
    console.log(`OTRN JS: There was an error sending the signal ${error}`);
  }
};

export {
  onError,
  handleError,
  handleSignalError,
};
