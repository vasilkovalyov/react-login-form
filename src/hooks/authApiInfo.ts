import { useEffect, useState } from 'react';

export function useAuthApiInfo() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (errorMessage !== null) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  }, [errorMessage]);

  return {
    isLoading,
    errorMessage,
    setIsLoading,
    setErrorMessage,
  };
}
