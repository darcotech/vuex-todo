<template>
  <div class="todo">
    <b-row>
      <b-col>
        <b-form inline>
          <label class="sr-only" for="item">Item</label>
          <b-form-input
            id="item"
            class="w-75 p-3 mb-1"
            name="item"
            placeholder="Enter Item"
            required>
          </b-form-input>
          <b-button variant="primary">Add Task</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-list-group class="w-75 mb-1">
          <b-list-group-item class="row">
            <b-col cols="1">
              <b-form-checkbox> </b-form-checkbox>
            </b-col>
            <b-col cols="10">
              Cras justo odio
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

</script>

<style>
form {
  margin-bottom: 25px;
}
input {
  margin-right: 25px;
}
.list-group-item {
  display: flex;
}
</style>
