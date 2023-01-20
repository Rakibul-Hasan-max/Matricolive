import { Outlet } from 'react-router-dom';
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
        </div>
    );
};

export default Main;