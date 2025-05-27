import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import AxiosPage from './Pages/AxiosPage';
import ReactQueryPage from './Pages/ReactQueryPage';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/axios" element={<AxiosPage />} />
        <Route path="/query" element={<ReactQueryPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
