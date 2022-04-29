import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import CharactersPage from './pages/CharactersPage';

const App = () => {
  return (
    <div id="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
