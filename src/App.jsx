import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  Home,
  About,
  Prayer,
  // Ramadan,
  CommunityActivities,
  Resources,
  Leadership,
  Join,
} from './pages';

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
        <Route path="about" element={<About />} />
        <Route path="prayer" element={<Prayer />} />
        {/* <Route path="ramadan" element={<Ramadan />} /> */}
        <Route path="community-activities" element={<CommunityActivities />} />
        <Route path="resources" element={<Resources />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}
