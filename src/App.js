import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { CartContextProvider } from './context/Cart-context';
import { SearchContextProvider } from './context/Search-context';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import { Cart } from './pages/Cart.jsx';
import MovieDetails from './pages/products/MovieDetails';


// function App() {
//   return (
//     <div className="App">
//       <h1>testing</h1>
//       <h2>testing{ x <10 ? x: 0}</h2>
//     </div>
//   );
// }


function App() {

  return (
    <>
    <SearchContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Nav />
            <div className="body">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/products/:productId' element={<MovieDetails />} />
                <Route path='/cart' element={<Cart />} />
                {/* <Route path={`GodFather`} element={<MovieDetails movieName='GodFather' director='Mohan Raja' movieDesc={`The Godfather is a 1972 American epic crime film[2] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo\'s best-selling 1969 novel of the same title. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. It is the first installment in The Godfather trilogy, chronicling the Corleone family under patriarch Vito Corleone (Brando) from 1945 to 1955. It focuses on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.`} />} /> */}
              </Routes>
            </div>
          </BrowserRouter>
        </CartContextProvider>   
      </SearchContextProvider>
    </>
  );
}





export default App;
