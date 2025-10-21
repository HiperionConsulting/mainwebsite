import {TrendingUp, Mail, Phone, MapPin} from 'lucide-react';

interface FooterProps {
    onNavigate: (page: string) => void;
}

export default function Footer({onNavigate}: FooterProps) {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <TrendingUp className="w-8 h-8 text-blue-500"/>
                            <span className="text-2xl font-bold text-white">Hiperion Consulting</span>
                        </div>
                        <p className="text-slate-400">
                            Transforming businesses through strategic financial and technology consulting.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => onNavigate('home')}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onNavigate('services')}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onNavigate('technology')}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Technology
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => onNavigate('privacy')}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onNavigate('terms')}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Terms of Condition
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 mt-0.5 text-blue-500"/>
                                <span>info@hiperion.consulting</span>
                            </li>
                            {/*<li className="flex items-start space-x-3">*/}
                            {/*  <Phone className="w-5 h-5 mt-0.5 text-blue-500" />*/}
                            {/*  <span>+1 (555) 123-4567</span>*/}
                            {/*</li>*/}
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 mt-0.5 text-blue-500"/>
                                <span>No.357-A The Bridge, Level 2, Dubai Sports City. Dubai, 39226 <br/>
                                United Arabs Emirates<br/>
                                United Arab Emirates</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Hiperion Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
