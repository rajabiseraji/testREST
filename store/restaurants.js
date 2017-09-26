const _ = require('lodash');

export const state = () => ({
    vendors: [],
    count: 0,
    status: true
});


export const getters = {
    count(state) {
        return state.count
    },

    vendors(state) {
        return state.vendors
    }
}

export const mutations = {
    SET_DATA(state, {data, status}) {
        console.log(data)
        state.count = data.count;
        state.vendors = data.vendors;
        state.status = status;
    }
};