import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header title="Horned Beast Application" />
      <Main message="Vote For Your Favorite Horned Beast Images:" />
      <Footer />
    </>
  );
}

export default App;
