import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionVillager from '@reducers/Villagers/action';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    media: {
        height: 100,
    },
    mediaTitle: {
        margin: 0,
    },
}));

function CardRoot(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { title, id, imgUrl } = props;

    return (
        <Card>
            <CardActionArea
                component={Link}
                to={`Villagers/${id}`}
                onClick={() => dispatch(ActionVillager.selectVillager(id))}
            >
                <CardMedia component="img" height="100" image={imgUrl} title="Contemplative Reptile" />
                <Typography gutterBottom component="p" align="center" className={classes.mediaTitle}>
                    {title}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

CardRoot.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default CardRoot;
