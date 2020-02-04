import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState([]);

  const handleTech = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (tech) {
      setTech(JSON.parse(storageTech));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologia</strong>
      <br />
      <input onChange={e => setNewTech(e.target.value)} value={newTech} />
      <button type="button" onClick={() => handleTech()}>
        Adicionar
      </button>
    </>
  );
}

export default App;
