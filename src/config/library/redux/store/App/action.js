export const Types = {
    CHANGE_FOOTER_SHOW: 'app/change_footer_show',
};

export const changeFooterShow = (showSwitch) => {
    return {
        type: Types.CHANGE_FOOTER_SHOW,
        payload: {
            showSwitch,
        },
    };
};
