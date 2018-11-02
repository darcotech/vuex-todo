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
    editItem(state, changedItem) {
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
    editItem({commit}, item)  {
      commit("editItem", {item, done: !item.done })
    },
    toggleItem({ commit }, targetItem) {
      commit("editItem", { name:targetItem.name, done:!targetItem.done });
    },
  }
}
