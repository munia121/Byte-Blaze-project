import Footer from '../component/Footer';
import NavBar from '../component/NavBar';

import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <NavBar></NavBar>
            </div>

                <div className='min-h-[calc(100vh-116px)] '>
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>
        </div>
    );
};

export default MainLayout;