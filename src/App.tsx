import { useState } from 'react';
import { ALL_CHECKOFFS } from './Data';
import { OverworldCard } from './OverworldCard';
import { PalaceCard } from './PalaceCard';

function App() {
  const [stateArray, setStateArray] = useState<boolean[]>(
    Array(ALL_CHECKOFFS.length).fill(false)
  );

  const toggleState = (index: number) => {
    setStateArray((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <>
      <PalaceCard stateArray={stateArray} onClick={(index) => toggleState(index)} />
      <OverworldCard stateArray={stateArray} onClick={(index) => toggleState(index)} />
    </>
  )
}

export default App
