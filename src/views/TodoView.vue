<template>
  <div class="todo-page">
    <h2>Shopping List</h2>
    <hr>
    <Todo />
  </div>
</template>

<script>
  import Todo from '@/components/Todo.vue'

  export default {
    components: {
      Todo
    }
  }
</script>
