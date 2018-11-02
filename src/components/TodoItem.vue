<template>
  <b-list-group-item class="row" v-bind:class="{ checked: item.done }">
    <b-col cols="1">
      <b-form-checkbox
        :checked="item.done"
        @change="changeItemStatus(item)"
      >
      </b-form-checkbox>
    </b-col>
    <b-col cols="10">
      {{ item.name }}
    </b-col>
    <b-col cols="1">
      <b-button-close @click="removeItem(item)"></b-button-close>
    </b-col>
  </b-list-group-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    ...mapActions('todo', [
      'toggleItem'
    ]),
    changeItemStatus(item) {
      this.toggleItem(item);
    },
    removeItem(item) {
      this.$store.commit("todo/removeItem", item)
    }
  }
}
</script>