import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
