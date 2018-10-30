<template>
  <div class="todo">
    <b-form class="row" @submit.prevent="onSubmit">
      <b-col cols="10" style="paddingLeft:0">
        <b-form-input
            id="item"
            class="w-100"
            name="item"
            type="text"
            placeholder="Enter Item"
            v-model="item"
            required>
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
              <b-form-checkbox :id="'done-' + index" v-model="item.done"> </b-form-checkbox>
            </b-col>
            <b-col cols="10">
              {{ item.name }}
            </b-col>
            <b-col cols="1">
              <b-button-close></b-button-close>
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
      'addItem'
    ]),
    async onSubmit() {
      // TODO: Validate
      await this.addItem(this.item);
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
  text-decoration: line-through;
  color: gray;
  background-color: #eeeeee;
}
</style>
