import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CidadeUniversitaria from './Pages/CidadeUniversitaria';
import Header from './Components/Header/Header';
import Footer from './Components/footer';
import Pesquisadores from './Pages/Pesquisadores';
import Publicacoes from './Pages/Publicacoes';
import Artistas from './Pages/Artistas';
import { Artista_pag1 } from './Pages/Artistas/Artista_pag1';
import Projeto from './Pages/Projeto';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import EBA from './Pages/EBA';
import AtrocidadesMaravilhosas from './Pages/Coletivos/AtrocidadesMaravilhosas';
import { Coletivos } from './Pages/Coletivos';
import { Entrevistas } from './Pages/Entrevistas';
import { ArtistProvider } from './contexts/artists';

const Routes = () => {
    return (
        <ArtistProvider>
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path ="/" component={Home} />
                    <Route path="/EBA" component={EBA} />
                    <Route path="/projeto" component={Projeto} />
                    <Route path="/contato" component={Contato} />
                    <Route path="/artistas" component={Artistas} />
                    <Route path="/artista/:id" component={Artista_pag1} />
                    <Route path="/publicacoes" component={Publicacoes} />
                    <Route path="/pesquisadores" component={Pesquisadores} />
                    <Route path="/cidade_universitaria" component={CidadeUniversitaria} />
                    <Route path="/AtrocidadesMaravilhosas" component={AtrocidadesMaravilhosas} />
                    <Route path="/coletivos" component={Coletivos} />
                    <Route path="/entrevistas" component={Entrevistas} />
                </Switch>

                <Footer/>
            </BrowserRouter>
        </ArtistProvider>
    )
}

export default Routes;