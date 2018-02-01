<template>
  <div id="button-success">
    <button
      class="button is-success"
      @click="createModal">
      Novo Carro
    </button>
  </div>
</template>
<script>
export default {
  name: 'button-success',
  props: ['visible'],
  data() {
    return {
    };
  },
  methods: {
    createModal() {
      this.$emit('showModal');
    },
  },
};
</script>

<style>
  .button {
    float: left;
    margin-right: 20px;
  }

  .button.is-sucess {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
</style>

