export const Types = {
    SELECT_VILLAGER: 'villagers/sekect_villager',
};

export const selectVillager = (id) => {
    return {
        type: Types.SELECT_VILLAGER,
        payload: {
            id,
        },
    };
};
