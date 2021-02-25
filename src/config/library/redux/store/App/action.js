import { createActions } from 'reduxsauce';

const prefix = 'APP/';

export const { Types, Creators } = createActions(
    {
        changeFooterShow: ['showSwitch'],
        changeBackShow: ['showSwitch'],
    },
    { prefix }
);

export default Creators;
