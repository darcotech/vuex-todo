<template>
  <div class="todo-list">
    <!-- start of todo form -->
    <b-row>
      <b-col>
        <!-- display validation error -->
         <b-alert v-if="errors.has('item')" show dismissible variant="danger">
          {{ errors.first('item') }}
        </b-alert>
      </b-col>
    </b-row>
    <!-- post to onSubmit function -->
    <b-form class="row" @submit.prevent="onSubmit">
      <b-col cols="10">
      <!-- bind to local `item` state -->
        <b-form-input
          id="item"
          class="w-100"
          name="item"
          type="text"
          placeholder="What do you want to buy?"
          v-model="item"
          v-validate="'required'"
          autocomplete="off"
        ></b-form-input>
      </b-col>
      <b-col cols="2">
        <b-button type="submit" variant="primary">Add Task</b-button>
      </b-col>
    </b-form>
    <!-- end of todo form -->

    <!-- start of todo list -->
    <b-row>
      <b-col md="10">
        <b-list-group>
          <TodoItem v-for="(item, index) in items" :key="index" :item="item" />
        </b-list-group>
      </b-col>
    </b-row>
    <!-- end of todo list -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
    return {
      item:''
    }
  },
  computed: {
    ...mapState([
      'items'
    ])
  },
   methods: {
    ...mapActions('todo', [
      'addItem',
    ]),
    async onSubmit() {
      const isvalid = await this.$validator.validateAll();
      if(isvalid) {
        await this.addItem(this.item);
        this.item=''; // Clear form after successful save
        this.$validator.reset();
      }
    },
  }
};
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
