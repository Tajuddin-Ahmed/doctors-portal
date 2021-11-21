import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "08.00 AM - 09.00AM",
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: "Cosmetics Dentistry",
        time: "09.00 AM - 10.00AM",
        price: 25,
        space: 8,
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "10.00 AM - 11.00AM",
        price: 30,
        space: 9,
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "11.00 AM - 12.00PM",
        price: 27,
        space: 5,
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: "06.00 PM - 07.00PM",
        price: 26,
        space: 10,
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: "07.00 PM - 08.00PM",
        price: 24,
        space: 10,
    }
];
const AvailableAppointments = ({ date }) => {
    const [successBooking, setSuccessBooking] = useState(false);
    return (
        <Container>
            <Typography sx={{ color: 'info.main', mb: 3 }} variant="h4">Avaiable Appointments on {date.toDateString()}</Typography>
            {successBooking && <Alert severity="success">Appointment Booking successful</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        booking={booking}
                        key={booking.id}
                        setSuccessBooking={setSuccessBooking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;