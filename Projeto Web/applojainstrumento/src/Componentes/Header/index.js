import { Link } from 'react-router-dom';

import './style.css'; 

import RazaoSocial from '../Empresa/RazaoSocial';

function Header(){
    return(
        <>
            <header>
                <h1>
                    <RazaoSocial/> 
                </h1>
            </header>
            <Link to='/'>Clique aqui para Home</Link>
            <br/>
            <Link to='/sobre'>Clique aqui para Sobre Nós</Link>
            <br/>
            <Link to='/produto'>Clique aqui ir para Produto</Link>
            <br/>
            <Link to='/venda'>Clique aqui ir para Vendas</Link>
            <br/>
            <Link to='/cliente'>Clique aqui ir para Clientes</Link>
        </>
    )
}
export default Header;