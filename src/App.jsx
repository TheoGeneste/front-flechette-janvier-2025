
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import NavBar from './Components/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from './Context/AuthContext'
import { useState } from 'react'
import AuthService from './Services/AuthService'
import GamesPage from './Pages/GamesPage'
import SecuRoute from './Wrappers/SecuRoute'

function App() {
  const [user, setUser] = useState(AuthService.getUser());
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.tokenValid());

  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/games" element={<SecuRoute><GamesPage /></SecuRoute>} />
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
