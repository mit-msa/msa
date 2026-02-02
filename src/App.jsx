import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, Prayer, Resources, Leadership, Join } from './pages';

/**
 * Main App component with routing configuration
 *
 * Uses a Layout component that provides consistent header/footer
 * across all pages via the Outlet component.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="prayer" element={<Prayer />} />
        <Route path="resources" element={<Resources />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}
