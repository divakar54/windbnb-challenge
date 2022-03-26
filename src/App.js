import './App.css'; 
import {Header} from './components/Header/Header'
import Locations from './components/Locations/Locations';
import Container from './containers/Container/Container';

function App() {
  return (
    <Container>
    <Header/>
    <Locations />
    </Container>
  );
}

export default App;
