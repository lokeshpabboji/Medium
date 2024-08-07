import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from "./pages/Signup"
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { Myblogs } from './pages/Myblogs'
import './App.css'
import Layout from './Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Blogs />} />
            <Route path='home' element={<Blogs />} />
            <Route path='blog/:id' element={<Blog />} />
            <Route path='publish' element={<Publish />} />
            <Route path='myblogs' element={<Myblogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
