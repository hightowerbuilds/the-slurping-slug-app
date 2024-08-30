import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage"
import ComicsPage from "./pages/ComicsPage"
import StorePage from "./pages/StorePage";
import CommentsPage from "./pages/CommentsPage";

import { Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<MusicPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/comments" element={<CommentsPage />} />
    </Routes>
  )
}

