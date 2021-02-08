import Header from './Components/Header'
import Section from './Components/Section';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Section />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
