import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import MovieDetails from './components/movieDetails/MovieDetails';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/movie/:imdbID' component={MovieDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
