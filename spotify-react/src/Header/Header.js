import React from 'react';
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

/* cria-se a constante Header, pois vamos exportar a função de Header*/
/*Para mudar o nome de todas as palavras igual ao mesmo tempo: ctrl + F, digita o a palavra que quer mudar, clica na setinha da esquerda pra abrir a aba embaixo, escreve a palavra noma e clida no segundo icone da direita (replace all)*/

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Buscar"/>
                <input 
                    id="search-input" 
                    maxLength="800" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header
