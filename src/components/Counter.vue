<template>
  <div class="counter">
    <b-row align="center">
      <b-col>
        <h1>Clicked <b-badge> {{ count }} </b-badge> times! Count is <b-badge>{{ parity }}</b-badge> </h1>
      </b-col>
    </b-row>
    <b-row align="center">
      <b-col>
         <b-button-group>
          <b-button @click="increment" variant="success">Increment</b-button>
          <b-button @click="decrement" variant="danger">Decrement</b-button>
          <b-button @click="incrementIfOdd" variant="info">Increment if Odd</b-button>
          <b-button @click="incrementAsync" variant="warning">Increment Async</b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        count: 0
      }
    },
    computed: {
      parity: function() {
        return this.count % 2  === 0 ? 'even' : 'odd'
      }
    },
    methods: {
      increment: function() {
        this.count++;
      },
      decrement: function() {
        this.count--
      },
      incrementIfOdd: function() {
        if (this.parity === 'odd') {
          this.increment();
        }
      },
      incrementAsync: async function() {
        return await setTimeout(() => {
          this.increment()
        }, 1000)
      }
    }
  }
</script>

<style scoped>
.counter {
  margin-top: 25px;
}
h1 {
  font-size: 48px;
}
.btn-group {
  margin-top: 25px;
}
</style>
