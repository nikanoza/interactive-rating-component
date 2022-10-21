import { Main, Result } from "pages";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [number, setNumber] = useState<null | number>(null);

  const updateNumber = (integer: number) => {
    setNumber(integer);
  };
  return (
    <AppComponent>
      <Routes>
        <Route
          path="/"
          element={<Main setNumber={updateNumber} number={number} />}
        />
        <Route path="/result" element={<Result number={number} />} />
      </Routes>
    </AppComponent>
  );
}

const AppComponent = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #131518;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
