import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BusinessDirectoryPage from "./pages/BusinessDirectoryPage";
import NotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/business/:id/:slug" element={<BusinessDirectoryPage />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
