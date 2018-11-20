<template>
  <div id="app">
   <b-jumbotron  bg-variant="info" text-variant="white">
      <template slot="header">
        <b-container>Vuex ToDo App</b-container>
      </template>
      <template slot="lead">
        <b-container>Built using Bootstrap-Vue.js</b-container>
      </template>
    </b-jumbotron>

    <b-container>
      <div class="todo-page">
        <h2>Shopping List</h2>
        <hr>
        <TodoList />
      </div>
    </b-container>
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList.vue'

  export default {
    name: 'TodoView',
    components: {
      TodoList
    }
  }
</script>
