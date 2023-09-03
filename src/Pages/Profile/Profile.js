import { Box, Typography } from '@mui/material';
// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {

    // const {user} = useContext(AuthContext);

    return (
        <Box sx={{m: "200px"}}>
            <Typography>Currently this page is under Maintenance. We will be get back very soon.</Typography>
            {/* <Typography variant="body1">{user?.displayName}</Typography> */}
        </Box>
    );
};

export default Profile;