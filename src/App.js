import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Box from '@mui/material/Box';
import Home from "./components/Home";


function App() {
  return (
    <>
      <Box>
        <Router >
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
