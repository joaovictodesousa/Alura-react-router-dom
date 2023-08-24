import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Joao from './paginas/Joao';
import Menu from "./componentes/Menu";

function App() {
  return (
    <BrowserRouter>
     <Menu/> {/* O menu foi importado do lado de fora do Routes para ficar em todas as paginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="/joao" element={<Joao />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
