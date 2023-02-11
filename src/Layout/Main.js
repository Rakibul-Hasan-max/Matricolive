import { Outlet } from 'react-router-dom';
import BottomNav from '../Pages/Components/Shared/BottomNav/BottomNav';
import BottomNavbar from '../Pages/Components/Shared/BottomNav/BottomNavbar';
import Footer from '../Pages/Components/Shared/Footer/Footer';
import Navigation from '../Pages/Components/Shared/Navigation/Navigation';
import Newsletter from '../Pages/Components/Shared/Newsletter/Newsletter';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Newsletter></Newsletter>
            <Footer></Footer>
            {/* <BottomNav></BottomNav> */}
            <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default Main;