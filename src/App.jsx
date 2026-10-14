import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Leaders from './pages/Leaders'
import Landowner from './pages/Landowner'
import Media from './pages/Media'
import Customer from './pages/Customer'
import SignIn from './pages/SignIn'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:type" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="leaders" element={<Leaders />} />
        <Route path="landowner" element={<Landowner />} />
        <Route path="media" element={<Media />} />
        <Route path="customer" element={<Customer />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
