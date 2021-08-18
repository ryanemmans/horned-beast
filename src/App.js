import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <>
      <Header title="Horned Beast Application" />
      <Main message="Click On Images to Vote For Your Favorite Horned Beasts" />
      <Footer author="Author: Ryan Emmans" />
    </>
  );
}

export default App;
