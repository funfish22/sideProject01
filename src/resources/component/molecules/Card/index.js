import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectVillager } from '@reducers/Villagers/action';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 100,
    },
    mediaTitle: {
        margin: 0,
    },
}));

function CardRoot(props) {
    const dispatch = useDispatch();

    const { title, id, imgUrl } = props;
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea component={Link} to={`Villagers/${id}`} onClick={() => dispatch(selectVillager(id))}>
                <CardMedia component="img" height="100" image={imgUrl} title="Contemplative Reptile" />
                <Typography gutterBottom component="p" align="center" className={classes.mediaTitle}>
                    {title}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default CardRoot;
