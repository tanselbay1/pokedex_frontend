import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
