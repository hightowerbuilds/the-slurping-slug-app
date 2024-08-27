import HomePage from "./pages/HomePage";
import ImagesPage from "./pages/ImagesPage"
import ComicsPage from "./pages/ComicsPage"
import StorePage from "./pages/StorePage";
import CommentsPage from "./pages/CommentsPage";

import { Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<ImagesPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/comments" element={<CommentsPage />} />
    </Routes>
  )
}

