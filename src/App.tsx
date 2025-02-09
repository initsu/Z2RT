import { useEffect, useState } from 'react';
import { ALL_CHECKOFFS } from './Data';
import { OverworldCard } from './OverworldCard';
import { PalaceCard } from './PalaceCard';
import { PopoutButton } from './PopoutButton';

const LOCAL_STORAGE_KEY = "Z2RT_stateArray";

function App() {
  const [stateArray, setStateArray] = useState<boolean[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        if (parsed.length == ALL_CHECKOFFS.length) {
          return parsed;
        }
      }
    }
    return Array(ALL_CHECKOFFS.length).fill(false);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateArray));
  }, [stateArray]);

  const toggleState = (index: number) => {
    setStateArray((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <>
      <PalaceCard stateArray={stateArray} onClick={(index) => toggleState(index)} />
      <OverworldCard stateArray={stateArray} onClick={(index) => toggleState(index)} />
      <PopoutButton />
    </>
  )
}

export default App
