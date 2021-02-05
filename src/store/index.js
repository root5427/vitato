import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nextMark: "x",
        marks: Array(9).fill(null),
        winner: null,
        result: "",
    },
    getters: {
        getNextMark(state) {
            return state.nextMark;
        },
        marks(state) {
            return state.marks;
        },
        winner(state) {
            return state.winner;
        },
        result(state){
            return state.result;
        }
    },
    mutations: {
        UPDATE_NEXTMARK(state, newValue) {
            state.nextMark = newValue;
        },
        MARK(state, payload) {
            state.marks[payload.id] = payload.mark;
        },
        UPDATE_WINNER(state, payload) {
            state.winner = payload;
        },
        UPDATE_RESULT(state, payload) {
            state.result = payload;
        },
        UPDATE_MARKS(state, payload) {
            state.marks.fill(payload);
        }
    },
    actions: {
        updateMarks({commit}, payload) {
            commit("UPDATE_MARKS", payload)
        },
        updateNextMark({commit}, newValue) {
            commit("UPDATE_NEXTMARK", newValue);
        },
        mark({commit}, payload) {
            commit("MARK", payload);
        },
        updateWinner({commit}, payload) {
            commit("UPDATE_WINNER", payload);
        },
        updateResult({commit}, payload) {
            commit("UPDATE_RESULT", payload);
        }
    }
})