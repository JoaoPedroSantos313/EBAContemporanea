import React, {Component} from 'react';
import Home_post from '../../Components/home_post';
import Slider from '../../Components/Slider';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component{

    render(){
        return(
            <section className="home_main">
               

                <img  id='titulo'src='logo.png'></img>

                <section className='sabermais'>
                    <div className='texto'>
                        <Home_post title="Sobre" 
                                   text="Esta plataforma armazena e divulga os dados levantados e o material elaborado pelo grupo de pesquisa “Contagem regressiva aos 200, começando ao contrário: artistas formados pela EBA de 1975 à atualidade”."/>
                    </div>
                        
                    <Link to="/projeto"> 
                        <button className='botao'>
                            saiba mais
                        </button>
                    </Link>
                   
                </section>

                <section className='sabermais'>
                    <Slider/>
                </section>
            
                <section className='sabermais'>

                    <Link to="/cidade universitaria"> 
                        <button className='botao'>
                            saiba mais
                        </button>
                    </Link>
                    
                    <div className='texto'>
                        <Home_post title= "Cidade Universitária" 
                                   text = "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do setor desde os anos 1500, quando uma impressora desconhecida pegou uma galera do tipo e a mexeu para fazer um livro de amostras do tipo. "/>
                    </div>
                </section>

            </section>
        )
    }
};