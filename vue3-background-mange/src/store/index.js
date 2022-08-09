import {createStore} from 'vuex'
export default createStore({
    state: {
        isCollapse: true,
    },
    mutations: {
        updataIsCollapse(state,payload){
            state.isCollapse = !state.isCollapse 
        },
    }
})