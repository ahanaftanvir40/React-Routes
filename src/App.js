import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';








function App() {

  let user = true


  return (
    <div className="App">
      <Header />
      <AllRoutes user={user} />
      <Footer />
    </div>
  );
}

export default App;
