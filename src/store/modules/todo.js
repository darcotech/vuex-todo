export default {
  namespaced: true,

  state: {
    items:[
      {
        name: "Milk",
        done: false
      },
      {
        name: "Bread",
        done: true
      },
      {
        name: "Cake",
        done: false
      }
    ]
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    }
  },
  actions: {
    addItem({commit}, item) {
      commit("addItem",{
        name: item,
        done:false
      })
    }
  }
}
