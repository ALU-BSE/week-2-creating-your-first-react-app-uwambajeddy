import { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount((c) => c + 1);
  const decrement = (): void => setCount((c) => c - 1);
  const reset = (): void => setCount(0);

  return (
    <div className="App">
      <MyComponent
        title="Hello from MyComponent!"
        description="This component receives its title and description through props."
      />

      <section className="counter">
        <h2>Counter</h2>
        <p className="counter-value">{count}</p>
        <div className="counter-buttons">
          <button type="button" onClick={decrement}>-</button>
          <button type="button" onClick={reset}>Reset</button>
          <button type="button" onClick={increment}>+</button>
        </div>
      </section>
    </div>
  );
}

export default App;
