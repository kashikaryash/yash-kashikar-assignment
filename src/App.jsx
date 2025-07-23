import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YashKashikarHomePage from './pages/YashKashikarHomePage';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { antdLocales } from './locales/antdLocales';

function App() {
  const { i18n } = useTranslation();

  return (
    <ConfigProvider locale={antdLocales[i18n.language]} key={i18n.language}>
      <Router>
        <Routes>
          <Route path="/yash-kashikar" element={<YashKashikarHomePage />} style={{
                          backgroundImage: 'radial-gradient(#d4d4d4 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                      }}/>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
