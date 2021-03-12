import React from 'react';
import PropTypes from 'prop-types';
import withHomePageContainer from '@serviceCenter/containers/Home/HomePageContainer';

import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tabs from '@component/molecules/Tabs';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Box, Typography, CardMedia } from '@material-ui/core';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination, Autoplay]);

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    media: {
        height: 100,
    },
    mediaTitle: {
        margin: 0,
    },
    swiperRoot: {
        '& .swiper-pagination-bullet': {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

function HomePage(props) {
    const { speed, lists, homeTabs } = props;

    const classes = useStyles();

    return (
        <>
            <Box className={classes.swiperRoot}>
                <Swiper slidesPerView={1} pagination={{ clickable: true }} loop autoplay={{ delay: speed }}>
                    {lists &&
                        lists.map((row, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <CardMedia component="img" image={row.imgUrl} alt={row.title} />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </Box>
            <Container>
                <Box color="primary.main" mb={2}>
                    <Typography component="h2" variant="h5" className={classes.title}>
                        Title
                    </Typography>
                    <Tabs homeTabs={homeTabs} />
                </Box>
            </Container>
        </>
    );
}

HomePage.propTypes = {
    speed: PropTypes.number,
    lists: PropTypes.array,
    homeTabs: PropTypes.array,
};

const HomePageWrapperWithContainer = withHomePageContainer({
    Component: HomePage,
});

export default HomePageWrapperWithContainer;
