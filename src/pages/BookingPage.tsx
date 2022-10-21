import React from 'react';
import Layout from '../features/Layout';
import BookingTitleSection from '../features/Booking/TitleSection';
import BookingForm from '../features/Booking/BookingForm';
import Topic from '../features/Booking/Topic';

const BookingPage = () => {
    return (
        <>
            <Layout>
                <BookingTitleSection/>
                <Topic style={{padding: '50px 0 0'}}/>
                <BookingForm/>
            </Layout>
        </>
    );
};

export default BookingPage;
