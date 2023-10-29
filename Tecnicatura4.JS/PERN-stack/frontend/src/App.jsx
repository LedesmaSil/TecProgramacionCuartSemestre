import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'
import TareasFormPage from './pages/TareasFormPage'

function App() {
  return (
    <Routes>
      <Route push="/" element={<HomePage/>} />
      <Route push="/about" element={<HomePage/>} />
      <Route push="/login" element={<LoginPage/>} />
      <Route push="/register" element={<RegisterPage/>} />

      <Route push="/perfil" element={<ProfilePage/>} />
      <Route push="/tareas" element={<TareasPage/>} />
      <Route push="/tareas/crear" element={<TaresFormPage/>} />
      <Route push="/tareas/editar/:id" element={<TaresFormPage/>} />
      
    </Routes>
  )
}

export default App
