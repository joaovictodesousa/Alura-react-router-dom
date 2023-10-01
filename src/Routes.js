//App é onde fica as rotas...

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Joao from './paginas/Joao';
import Menu from "./componentes/Menu";
import Naoencontrada from './paginas/Naoencontrada';

function App() {
  return (
    <BrowserRouter>
     <Menu/> {/* O menu foi importado do lado de fora do Routes para ficar em todas as paginas */}
      <Routes>
        <Route path="/" className="menu-link" element={<Inicio />} />
        <Route path="/sobremim" className="menu-link" element={<SobreMim />} />
        {/* <Route path="/joao" element={<Joao />} /> */}
        <Route path="*" element={ <Naoencontrada />} />  {/* Pagina de 404 */}
        </Routes>
    </BrowserRouter>
  );
}            

export default App;
