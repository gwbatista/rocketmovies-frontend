import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Movie } from '../pages/Movie';
import { New } from '../pages/New';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Movie />} />
      <Route path='/new' element={<New />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};