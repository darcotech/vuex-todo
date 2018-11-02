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
    },
    updateItem(state, changedItem) {
      state.items = state.items.map(item => item.name === changedItem.name ? changedItem : item)
    }
  },
  actions: {
    addItem({commit}, item) {
      commit("addItem",{
        name: item,
        done:false
      })
    },
    updateItem({commit}, changedItem) {
      commit("updateItem", changedItem)
    }
  }
}
