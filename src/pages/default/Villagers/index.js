import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeFooterShow, changeBackShow } from '@reducers/App/action';
import { selectVillager } from '@reducers/Villagers/action';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Breadcrumbs, Link, Typography, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
}));

function Villagers() {
    const dispatch = useDispatch();
    const classes = useStyles();

    const selectList = useSelector((state) => state.Villagers.selectList);
    const path = window.location.hash.substr(window.location.hash.lastIndexOf('/') + 1);

    const { title, imgUrl } = selectList;

    useEffect(() => {
        dispatch(changeFooterShow('none'));
        dispatch(changeBackShow(true));
        dispatch(selectVillager(path));

        return () => {
            dispatch(changeFooterShow('block'));
            dispatch(changeBackShow(false));
        };
    }, []);

    return (
        <Container component={Box} my={3}>
            <Box>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link component={RouterLink} color="inherit" to="/">
                        Home
                    </Link>
                    <Link component={RouterLink} color="inherit" to="/Villagers">
                        Villagers
                    </Link>
                    <Typography color="textPrimary">{title}</Typography>
                </Breadcrumbs>
            </Box>
            <Box my={2}>
                <Typography component="h2" variant="h5" className={classes.title}>
                    {title}
                </Typography>
                <CardMedia component="img" image={imgUrl} title={title} />
            </Box>
        </Container>
    );
}

export default Villagers;
