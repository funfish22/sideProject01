import { createActions } from 'reduxsauce';

const prefix = 'VILLAGERS/';

export const { Types, Creators } = createActions(
    {
        selectVillager: ['id'],
    },
    { prefix }
);

export default Creators;
