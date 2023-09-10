const errorHandler = async (error: Error | unknown) => {
  const message = 'unknown Error';

  if (error instanceof Error) {
    const occurredError = `Occured Error : ${error.message}`;
    return occurredError;
  }

  return message;
};

export default errorHandler;
