import { createActions } from 'reduxsauce';

const prefix = 'VILLAGERS/';

export const { Types, Creators } = createActions(
    {
        selectVillager: ['id'],
        changeStar: ['id'],
    },
    { prefix }
);

export default Creators;
