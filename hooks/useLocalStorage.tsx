import { Dispatch, SetStateAction, useState, useEffect } from 'react';

function useLocalStorage<Type>(key: string, initialValue: Type): [Type, Dispatch<SetStateAction<Type>>] {
  const [value, setValue] = useState<Type>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;