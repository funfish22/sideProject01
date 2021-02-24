import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeFooterShow, changeBackShow } from '@reducers/App/action';
import { selectVillager } from '@reducers/Villagers/action';

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
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    console.log('theme', theme);
    return {
        title: {
            fontWeight: 'bold',
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
        },
    };
});

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
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

function Villagers() {
    const dispatch = useDispatch();
    const classes = useStyles();

    const path = window.location.hash.substr(window.location.hash.lastIndexOf('/') + 1);

    const [expanded, setExpanded] = useState(false);
    const selectList = useSelector((state) => state.Villagers.selectList);
    const villager = useSelector((state) => state.Villagers.villager);

    const { season } = villager;

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
            <Box my={2}>
                <Typography component="h2" variant="h5" className={classes.title}>
                    {title}
                </Typography>
                <CardMedia component="img" image={imgUrl} title={title} />
            </Box>
            <Box my={2}>
                <Typography component="h3" variant="h6">
                    title
                </Typography>
                <div className={classes.AccordionRoot}>
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
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </Box>
        </Container>
    );
}

export default Villagers;
