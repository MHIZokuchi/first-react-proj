import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Item from './Components/Item';
import Section from './Components/Section';

function App() {

  const names = String("Ade;Fatima;Daniel;Gloria:Samuel").split(';');
  return (
    <>

<Header/>
<main>
<Section/>
  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      {
        names.map(v => <Item title={v}/>)
      }
     
  
      </div>
    </div>
  </div>

</main>

<Footer/>
    </>
  );
}

export default App;
