import {useState} from 'react';
import {Menu, X, TrendingUp} from 'lucide-react';

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

export default function Header({currentPage, onNavigate}: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {id: 'home', label: 'Home'},
        {id: 'services', label: 'Services'},
        {id: 'technology', label: 'Technology'},
        {id: 'capitalmarket', label: 'Capital market'},
    ];

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center space-x-2 text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                        <TrendingUp className="w-8 h-8 text-blue-600"/>
                        <span>Hiperion Consulting</span>
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`text-lg font-medium transition-colors ${
                                    currentPage === item.id
                                        ? 'text-blue-600'
                                        : 'text-slate-600 hover:text-blue-600'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => onNavigate('home')}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Get Started
                        </button>
                    </div>

                    <button
                        className="md:hidden text-slate-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    onNavigate(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                    currentPage === item.id
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                onNavigate('home');
                                setIsMenuOpen(false);
                            }}
                            className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Get Started
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}
