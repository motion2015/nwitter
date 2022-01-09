
//import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter,
  Routes,
  Route,
  Link} from 'react-router-dom';

import Home from 'routes/Home';
import Auth from 'routes/Auth';

const AppRouter = ({ isLoggenIn}) => {

  return (
    <BrowserRouter>
    <Routes>
    {
      isLoggenIn? (
        <Route exact path="/" element={<Home/>} />
      ) : (
        <Route exact path="/"  element={<Auth/>} />
      )
    }
    </Routes>

    </BrowserRouter>

  )
}

export default AppRouter;