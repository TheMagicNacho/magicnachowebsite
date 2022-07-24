/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';

interface ICounterProps {
	initialCount: number;
}

export default function Counter(props: ICounterProps) {

  const [count, setCount] = useState(props.initialCount);

  const increment = () => setCount(count + 1);

  return (
    <div>
      Current value: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}