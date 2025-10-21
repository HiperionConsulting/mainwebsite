import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Services from './pages/Services';
import Technology from './pages/Technology';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CapitalMarkets from "./pages/CapitalMarkets.tsx";

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home onNavigate={handleNavigate}/>;
            case 'services':
                return <Services/>;
            case 'technology':
                return <Technology/>;
            case 'privacy':
                return <Privacy/>;
            case 'terms':
                return <Terms/>;
            case 'capitalmarket':
                return <CapitalMarkets/>
            default:
                return <Home onNavigate={handleNavigate}/>;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage={currentPage} onNavigate={handleNavigate}/>
            <main>{renderPage()}</main>
            <Footer onNavigate={handleNavigate}/>
            <CookieConsent/>
        </div>
    );
}

export default App;
