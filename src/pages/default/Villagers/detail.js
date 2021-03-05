import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ActionApp from '@reducers/App/action';
import ActionVillager from '@reducers/Villagers/action';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Container,
    Box,
    Breadcrumbs,
    Link,
    Typography,
    CardMedia,
    Accordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails,
    Grid,
    Chip,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        title: {
            fontWeight: 'bold',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        AccordionRoot: {
            '& .MuiAccordionSummary-root': {
                color: '#fff',
            },
            '& .MuiAccordion-root:nth-of-type(1)': {
                '& .MuiAccordionSummary-root': {
                    backgroundColor: theme.palette.success.light,
                },
            },
            '& .MuiAccordion-root:nth-of-type(2)': {
                '& .MuiAccordionSummary-root': {
                    backgroundColor: theme.palette.error.light,
                },
            },
            '& .MuiAccordion-root:nth-of-type(3)': {
                '& .MuiAccordionSummary-root': {
                    backgroundColor: theme.palette.warning.light,
                },
            },
            '& .MuiAccordion-root:nth-of-type(4)': {
                '& .MuiAccordionSummary-root': {
                    backgroundColor: theme.palette.info.light,
                },
            },
            '& .MuiAccordion-root:nth-of-type(5)': {
                '& .MuiAccordionSummary-root': {
                    backgroundColor: theme.palette.secondary.dark,
                },
            },
            '& .MuiAccordionDetails-root': {
                padding: theme.spacing(2),
            },
        },
        infoTitle: {
            width: 100,
        },
        infoText: {
            fontSize: '0.875rem',
            marginBottom: theme.spacing(1),
        },
        gutter: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    };
});

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        '&$expanded': {
            minHeight: 'auto',
        },
    },
    content: {
        justifyContent: 'center',
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

function VillagersDetil() {
    const dispatch = useDispatch();
    const classes = useStyles();

    const path = window.location.hash.substr(window.location.hash.lastIndexOf('/') + 1);

    const [expanded, setExpanded] = useState(false);
    const selectList = useSelector((state) => state.Villagers.selectList);
    const villager = useSelector((state) => state.Villagers.villager);

    const { season } = villager;

    const { title, imgUrl } = selectList;

    useEffect(() => {
        dispatch(ActionApp.changeFooterShow('none'));
        dispatch(ActionApp.changeBackShow(true));
        dispatch(ActionVillager.selectVillager(path));

        return () => {
            dispatch(ActionApp.changeFooterShow('block'));
            dispatch(ActionApp.changeBackShow(false));
        };
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
            <Typography component="h2" variant="h5" className={classes.title}>
                {title}
            </Typography>
            <Grid container spacing={3} component="section">
                <Grid item sm={4} xs={12}>
                    <CardMedia component="img" image={imgUrl} title={title} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Box width={1} mb={1}>
                        <Box display="flex" flexWrap="wrap" alignItems="center">
                            <Chip label="Basic" color="primary" className={classes.infoTitle} />
                            <Box ml={2}>
                                <Typography component="p" className={classes.infoText}>
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography component="p" className={classes.infoText}>
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Divider className={classes.gutter} />
                    <Box width={1} my={1}>
                        <Box display="flex" flexWrap="wrap" alignItems="center">
                            <Chip label="Basic" color="primary" className={classes.infoTitle} />
                            <Box ml={2}>
                                <Typography component="p" className={classes.infoText}>
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography component="p" className={classes.infoText}>
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box my={2}>
                <Typography component="h3" variant="h6">
                    title
                </Typography>
                <Box className={classes.AccordionRoot}>
                    {season.map((row, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                        >
                            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>{row.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        123
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        123
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        123
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        123
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        123
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default VillagersDetil;
