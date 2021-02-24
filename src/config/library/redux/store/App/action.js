export const Types = {
    CHANGE_FOOTER_SHOW: 'app/change_footer_show',
    CHANGE_BACK_SHOW: 'app/change_back_show',
};

export const changeFooterShow = (showSwitch) => {
    return {
        type: Types.CHANGE_FOOTER_SHOW,
        payload: {
            showSwitch,
        },
    };
};

export const changeBackShow = (showSwitch) => {
    return {
        type: Types.CHANGE_BACK_SHOW,
        payload: {
            showSwitch,
        },
    };
};
