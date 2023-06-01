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

import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

//note que podemos tipar (typescript): req e do tipo "Request" e res é do tipo Response
router.get('/teste', (req: Request, res: Response) => {

return res.json({ ok: "Chamou a rota" })

})

//note que podemos tipar (typescript): req e do tipo "Request" e res é do tipo Response
router.post('/users', new CreateUserController().handle)

export { router };

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