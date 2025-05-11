import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/Home/HomePage'
import Layout from './components/layout/Layout'
import ProjectsPage from './pages/Projects/ProjectsPage'
import ContactPage from './pages/contact/ContactPage'

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App