'use strict';

export default {
    changeText(newText) {
        return {
            type: 'CHANGE_TEXT',
            text: newText
        };
    },
};
