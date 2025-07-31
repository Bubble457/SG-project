import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Result from './components/Result.jsx';
import Question from './components/Question.jsx'
import Intro from './components/Lesson/Intro.jsx'
import Intro1 from './components/Lesson/Intro1.jsx'
import Intro2 from './components/Lesson/Intro2.jsx'
import Intro3 from './components/Lesson/Intro3.jsx'
import Intro4 from './components/Lesson/Intro4.jsx'
// import Pretest from './components/Lesson/Pretest.jsx'
// import Pretest1 from './components/Lesson/Pretest1.jsx'
import Attitude from './components/Lesson/Attitude.jsx'
import Mission from './components/Lesson/Mission.jsx'
import Fovea from './components/Lesson/FoveaLesson.jsx'
import Page1 from './components/Lesson/Lesson1/page1.jsx'
import Page2 from './components/Lesson/Lesson1/page2.jsx'
import Page3 from './components/Lesson/Lesson1/page3.jsx'
import Check from './components/Lesson/Lesson1/Check.jsx'
import Click from './components/Lesson/Lesson1/Click.jsx'
import Page4 from './components/Lesson/Lesson2/P25.jsx'
import Page5 from './components/Lesson/Lesson2/P26.jsx'
import Page6 from './components/Lesson/Lesson2/P27.jsx'
import Page7 from './components/Lesson/Lesson2/P28.jsx'
import Page8 from './components/Lesson/Lesson2/P29.jsx'
import News1 from './components/Lesson/Lesson1/News1.jsx'
// import TrafficGame from './components/Lesson/Lesson1/TrafficGame.jsx'
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
  },
  {
    path: "/intro1",
    element: <Intro1 />
  },
  {
    path: "/intro2",
    element: <Intro2 />
  },
  {
    path: "/intro3",
    element: <Intro3 />
  },
  {
    path: "/intro4",
    element: <Intro4 />
  },
  // {
  //   path: "/pretest",
  //   element: <Pretest />
  // },
  // {
  //   path: "/pretest1",
  //   element: <Pretest1 />
  // },
  {
    path: "/attitude",
    element: <Attitude />
  },
  {
    path: "/mission",
    element: <Mission />
  },
  {
    path: "/page1",
    element: <Page1 />
  },
  {
    path: "/page2",
    element: <Page2 />
  },
  {
    path: "/page3",
    element: <Page3 />
  },
  {
    path: "/check",
    element: <Check/>
  },
  {
    path: "/click",
    element: <Click />
  },
  // {
  //   path: "/trafficgame",
  //   element: <TrafficGame/>
  // }

  {
    path: "/page4",
    element: <Page4 />
  },
  {
    path: "/page5",
    element: <Page5 />
  },
  {
    path: "/page6",
    element: <Page6 />
  },
  {
    path: "/page7",
    element: <Page7 />
  },
  {
    path: "/page9",
    element: <Page8 />
  },
  {
    path: "/news1",
    element: <News1 />
  }
  // {
  //   path: "/dad",
  //   element: <DAD />
  // },
  // {
  //   path: "/p38",
  //   element: <P38 />
  // },
  // {
  //   path: "/p39",
  //   element: <P39 />
  // },
  // {
  //   path: "/p40",
  //   element: <P40 />
  // },
  // {
  //   path: "/p41",
  //   element: <P41 />
  // },
  // {
  //   path: "/p42",
  //   element: <P42 />
  // },
  // {
  //   path: "/p43",
  //   element: <P43 />
  // },
  // {
  //   path: "/p44",
  //   element: <P44 />
  // },
  // {
  //   path: "/p45",
  //   element: <P45 />
  // },
  // {
  //   path: "/p46",
  //   element: <P46 />
  // },
  // {
  //   path: "/p47",
  //   element: <P47 />
  // },
  // {
  //   path: "/p47_1",
  //   element: <P47_1 />
  // },
  // {
  //   path: "/p47_2",
  //   element: <P47_2 />
  // },
  // {
  //   path: "/p47_3",
  //   element: <P47_3 />
  // },
  // {
  //   path: "/p47_4",
  //   element: <P47_4 />
  // },
  // {
  //   path: "/p48",
  //   element: <P48 />
  // },
  // {
  //   path: "/p49",
  //   element: <P49 />
  // },
  // {
  //   path: "/p50",
  //   element: <P50 />
  // },
  // {
  //   path: "/p50_1",
  //   element: <P50_1 />
  // },
  // {
  //   path: "/p50_2",
  //   element: <P50_2 />
  // },
  // {
  //   path: "/p50_3",
  //   element: <P50_3 />
  // },
  // {
  //   path: "/p50_4",
  //   element: <P50_4 />
  // },
  // {
  //   path: "/p51",
  //   element: <P51 />
  // },
  // {
  //   path: "/p52",
  //   element: <P52 />
  // },
  // {
  //   path: "/p53",
  //   element: <P53 />
  // },
  // {
  //   path: "/p54",
  //   element: <P54 />
  // },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>,
)