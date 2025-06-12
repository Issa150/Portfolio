import { Route, Routes } from 'react-router'
import { lazy } from 'react'
import './App.css'
import Allumni_project_single from './pages/Project-single/project_Allumni/Allumni_project_single'
import IdeaPedia_project_single from './pages/Project-single/project_IdeaPedia/IdeaPedia_project_single'
import FaceBook_clone_project_single from './pages/Project-single/project_FaceBook-clone/FaceBook_clone_project_single'

const HomePage = lazy(() => import('./pages/Home/HomePage'))
const Layout = lazy(() => import('./components/layout/Layout'))
const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/contact/ContactPage'))
const Joinly_project_single = lazy(() => import('./pages/Project-single/project_Joinly/Joinly_project_single'))

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path="projects">
            <Route index element={<ProjectsPage />} />
            <Route path='joinly' element={<Joinly_project_single />} />
            <Route path='allumni' element={<Allumni_project_single />} />
            <Route path='ideapedia' element={<IdeaPedia_project_single />} />
            <Route path='facebook-clone' element={<FaceBook_clone_project_single />} />

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App