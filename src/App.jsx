import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/HomePage';

const App = () => {
  return (
    <div id="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<p>Movies</p>} />
          <Route path="/characters" element={<p>Characters</p>} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
