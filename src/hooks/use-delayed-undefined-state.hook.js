import { useEffect, useState } from 'react';

const useDelayedUndefinedState = (observedState, delay) => {
  const [exists, setExists] = useState(false);
  const [delayedState, setState] = useState();

  useEffect(() => {
    if (observedState) {
      setState(observedState);
      setExists(true);
    } else {
      setExists(false);
      const timeout = setTimeout(() => setState(undefined), delay);
      return () => clearTimeout(timeout);
    }
  }, [observedState, delay]);

  return [exists, delayedState];
};

export default useDelayedUndefinedState;
