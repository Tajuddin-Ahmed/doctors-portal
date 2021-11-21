import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setSuccessBooking }) => {
    const { name, time, space, price } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="h6">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Price: ${price}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setSuccessBooking={setSuccessBooking}
            ></BookingModal>
        </>
    );
};

export default Booking;