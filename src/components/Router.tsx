import { Route, Routes } from 'react-router-dom';
import { Platform } from '../pages/Platform';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/platform/" element={<Platform />} />
      <Route path="/platform/lesson/:slug" element={<Platform />} />
    </Routes>
  );
}
