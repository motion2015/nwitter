import AppRouter from "./Router";
import {useState} from 'react';
function App() {
  const [isLoggenIn, setIsLoggenInS] = useState(false)
  return (
    <>
    <AppRouter isLoggenIn={isLoggenIn} />
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
