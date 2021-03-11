import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

import { Home as HomeIcon, MoveToInbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons';

function LeftDrawer(props) {
    const { open, onClose, onOpen } = props;

    const list = () => (
        <div role="presentation" onClick={onClose} onKeyDown={onOpen}>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="首頁" />
                </ListItem>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text} component={Link} to="/">
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
            {list()}
        </SwipeableDrawer>
    );
}

LeftDrawer.propTypes = {
    open: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
};

export default LeftDrawer;
