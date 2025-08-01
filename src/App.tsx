// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DemoPage from './pages/demo';
import LabelLookup from './pages/LabelLookup';
import LabelPage from './pages/LabelPage';

export default function App() {
  const baseUrl = import.meta.env.VITE_FRONT_END;
  const marketingSite = baseUrl + '/website/index.html';
  const mainWebsite = baseUrl + '/main-website/index.html';

  return (
    <Router>
      <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
        <Navbar marketingSite={marketingSite} mainWebsite={mainWebsite} />

        <main
          style={{
            paddingTop: '64px',
            paddingBottom: '64px',
            minHeight: 'calc(100vh - 64px)',
            backgroundColor: '#f3f4f6',
          }}
        >
          <Routes>
            <Route path="/" element={<LabelLookup />} />
            <Route path="/lookup" element={<LabelLookup />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/:identifierCode" element={<LabelPage />} />
            <Route path="/:sponsorName/:trialIdentifier/batch/:batchNumber" element={<LabelPage />} />
            <Route path="/:sponsorName/:trialIdentifier/kit/:kitNumber" element={<LabelPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
