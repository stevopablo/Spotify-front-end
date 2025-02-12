// import './App.css'
import Header from './components/Header'
// import Main from './components/Main'
import Home from './pages/Home'
import Artist from './pages/Artist'
import Artists from './pages/Artists'
import Songs from "./pages/Songs"
import Song from "./pages/Song"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/songs" element={<Songs/>}/>
        <Route path="/song/:id" element={<Song/>}/>
        <Route path="/artists" element={<Artists/>}/>
        <Route path="/artist/:id" element={<Artist/>}/>


      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
