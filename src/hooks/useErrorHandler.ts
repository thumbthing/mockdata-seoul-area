import { useEffect, useState } from 'react';

const useErrorHandler = async (error: Error | unknown) => {
  const [message, setMessage] = useState('Unknown Error');
  useEffect(() => {
    if (error instanceof Error) {
      setMessage(error.message);
    }
  }, [message]);
  return message;
};

export default useErrorHandler;