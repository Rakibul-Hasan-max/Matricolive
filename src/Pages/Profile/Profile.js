import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {

    // const {user} = useContext(AuthContext);

    return (
        <Box sx={{m: "100px"}}>
            {/* <Typography variant="body1">{user?.displayName}</Typography> */}
            hello
        </Box>
    );
};

export default Profile;