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
//lesson3
import DAD from './components/Lesson/Lesson3/drag_and_drop.jsx'
import DAD2 from './components/Lesson/Lesson3/drag_and_drop2.jsx'
import DAD3 from './components/Lesson/Lesson3/drag_and_drop3.jsx'
import DAD4 from './components/Lesson/Lesson3/drag_and_drop4.jsx'
import P38 from './components/Lesson/Lesson3/react38.jsx'
import P39 from './components/Lesson/Lesson3/react39.jsx'
import P40 from './components/Lesson/Lesson3/react40.jsx'
import P41 from './components/Lesson/Lesson3/react41.jsx'
import P42 from './components/Lesson/Lesson3/react42.jsx'
import P43 from './components/Lesson/Lesson3/react43.jsx'
import P44 from './components/Lesson/Lesson3/react44.jsx'
import P45 from './components/Lesson/Lesson3/react45.jsx'
import P46 from './components/Lesson/Lesson3/react46.jsx'
import P47 from './components/Lesson/Lesson3/react47_0.jsx'
import P47_1 from './components/Lesson/Lesson3/react47_1.jsx'
import P47_2 from './components/Lesson/Lesson3/react47_2.jsx'
import P47_3 from './components/Lesson/Lesson3/react47_3.jsx'
import P47_4 from './components/Lesson/Lesson3/react47_4.jsx'
import P48 from './components/Lesson/Lesson3/react48.jsx'
import P49 from './components/Lesson/Lesson3/react49.jsx'
import P50 from './components/Lesson/Lesson3/react50_0.jsx'
import P50_1 from './components/Lesson/Lesson3/react50_1.jsx'
import P50_2 from './components/Lesson/Lesson3/react50_2.jsx'
import P50_3 from './components/Lesson/Lesson3/react50_3.jsx'
import P50_4 from './components/Lesson/Lesson3/react50_4.jsx'
import P51 from './components/Lesson/Lesson3/react51.jsx'
import P52 from './components/Lesson/Lesson3/react52.jsx'
import P53 from './components/Lesson/Lesson3/react53.jsx'
import P54 from './components/Lesson/Lesson3/react54.jsx'
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