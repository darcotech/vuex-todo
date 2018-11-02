<template>
  <div class="todo-list">
    <b-row>
      <b-col style="paddingLeft:0">
         <b-alert v-if="errors.has('item')" show dismissible variant="danger">
          {{ errors.first('item') }}
        </b-alert>
      </b-col>
    </b-row>
    <b-form class="row" @submit.prevent="onSubmit">
      <b-col cols="10" style="paddingLeft:0">
        <b-form-input
            id="item"
            class="w-100"
            name="item"
            type="text"
            placeholder="Enter Item"
            v-model="item"
            v-validate="'required'"
            autocomplete="off"
          >
          </b-form-input>
      </b-col>
      <b-col cols="2">
        <b-button type="submit" variant="primary">Add Task</b-button>
      </b-col>
    </b-form>
    <b-row>
      <b-col>
        <b-list-group class=" mb-1">
          <b-list-group-item class="row" v-for="(item, index) in items" :key="index" v-bind:class="{ checked: item.done}  ">
            <b-col cols="1">
              <b-form-checkbox
                :id="'done-' + index"
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
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  data() {
    return {
      item:''
    }
  },
  computed: {
    ...mapState('todo', [
      'items'
    ])
  },
  methods: {
    ...mapActions('todo', [
      'addItem',
      'toggleItem'
    ]),
    async onSubmit() {
      const result = await this.$validator.validateAll();
      if(result) {
        await this.addItem(this.item);
        this.item='';
      }
    },
    async changeItemStatus(item) {
      await this.toggleItem(item);
    },
    removeItem(item) {
      this.$store.commit("todo/removeItem", item)
    }
  }
}
</script>

<style>
form {
  margin-bottom: 25px;
}
.list-group-item {
  display: flex;
}
.list-group-item:hover{
  background-color: aliceblue;
}
.checked {
  font-style: italic;
  text-decoration: line-through !important;
  color: gray;
  background-color: #eeeeee;
}
</style>
