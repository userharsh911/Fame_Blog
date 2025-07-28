import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import AddPost from './pages/AddPost.jsx'
import PostCardDetails from './pages/PostCardDetails.jsx'
import Home from './pages/Home.jsx'
import PostEdit from './pages/PostEdit.jsx'
import MyPost from './pages/MyPost.jsx'
import AdminPage from './pages/AdminPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/> }/>
      <Route path='login' element={<AuthLayout Authentication={false}><Login/></AuthLayout>}/>
      <Route path='signup' element={ <AuthLayout Authentication={false}><Signup/></AuthLayout> }/>
      <Route path='addpost' element={ <AuthLayout Authentication={true}><AddPost/></AuthLayout> }/>
      <Route path='post/:postid' element={ <AuthLayout Authentication={true}><PostCardDetails/></AuthLayout> }/>
      <Route path='post/edit/:postid' element={ <AuthLayout Authentication={true}><PostEdit/></AuthLayout> }/>
      <Route path='mypost' element={ <AuthLayout Authentication={true}><MyPost/></AuthLayout> }/>
      <Route path='admin/:userid' element={ <AuthLayout Authentication={true}><AdminPage/></AuthLayout> }/>
      <Route path='home' element={<Home/> }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
