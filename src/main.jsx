import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Result from './components/Result.jsx';
import Question from './components/Question.jsx'
import Intro from './components/Lesson/Intro.jsx'
// import Personality from './components/Personality.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <ProtectedRoute><Home /></ProtectedRoute>
  },
  {
    path: "/result", 
    element: <ProtectedRoute><Result /></ProtectedRoute>
  },
  {
    path: "/question",
    element: <Question />
  },
  {
    path: "/intro",
    element: <Intro />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>,
)