import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography, Button } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '400px', marginTop: -115 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 3 }} style={{ color: "#5ce7ed" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3 }} style={{ fontSize: 14, color: "white", fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus magnam odio porro at illo necessitatibus officiis rem. Quae, repudiandae.
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: "#5ce7ed" }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;