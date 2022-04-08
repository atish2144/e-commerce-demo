import './App.css';
import {Routes,Route} from "react-router-dom"
import MainPage from './component/MainPage';
import HomePage from "./component/HomePage"
import Cart from './component/Cart';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/*' element={<MainPage/>} />
      <Route exact path='/' element={<MainPage/>} />
      <Route  path='/homepage' element={<HomePage/>}/>
      <Route  path='/homepage/cart' element={<Cart/>}/>
  
     </Routes>


    </div>
  );
}

export default App;
