import { Navigate, Route, Routes } from 'react-router-dom'
import CatalogPage from './pages/CatalogPage'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import OwnerPage from './pages/OwnerPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import TheaterPage from './pages/TheaterPage'
import TvPage from './pages/TvPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/categories" element={<Navigate to="/catalog" replace />} />
      <Route path="/categories/" element={<Navigate to="/catalog" replace />} />
      <Route path="/categories.html" element={<Navigate to="/catalog" replace />} />

      <Route path="/search" element={<SearchPage />} />
      <Route path="/search.html" element={<SearchPage />} />

      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movie.html" element={<MoviePage />} />

      <Route path="/tv" element={<TvPage />} />
      <Route path="/tv.html" element={<TvPage />} />

      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/" element={<ProfilePage />} />
      <Route path="/profile.html" element={<ProfilePage />} />

      <Route path="/theater" element={<TheaterPage />} />
      <Route path="/theater/" element={<TheaterPage />} />
      <Route path="/theater.html" element={<TheaterPage />} />

      <Route path="/owner" element={<OwnerPage />} />
      <Route path="/owner/" element={<OwnerPage />} />
      <Route path="/owner.html" element={<OwnerPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

