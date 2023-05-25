import{
    BrowserRouter,
    Routes,
    Route
}from 'react-router-dom';
import Header from './Componentes/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Vendas from './pages/Vendas';
import Clientes from './pages/Clientes';
import Erro from './pages/Erro';

function RouterApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produto' element={<Produtos />} />
                <Route path='/venda' element={<Vendas />} />
                <Route path='/cliente' element={<Clientes />} />
                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;