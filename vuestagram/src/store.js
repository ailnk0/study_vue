import axios from 'axios'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      more_post: {},
      more_count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setMore(state, data) {
      state.more_post = data;
      state.more_count++;
    }
  },
  actions: {
    getMore(context) {
      axios.get(`https://codingapple1.github.io/vue/more${context.state.more_count}.json`)
        .then((response) => {
          context.commit('setMore', response.data);
        })
        .catch((/*error*/) => {
        });
    }
  }
})

export default store