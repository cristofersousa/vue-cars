<template>
  <div id="button-danger">
    <button
      class="button is-danger"
      @click="deleteCars">Excluir Carro
    </button>
  </div>
</template>
<script>

import { mapActions } from 'vuex';

export default {
  name: 'button-danger',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'deleteCars',
    ]),
  },
};
</script>

<style>
:root {
  --danger: #B54949;
}

.button.is-danger {
  background-color: var(--danger);
  border-color: #612727;
  color: #fff;

}
</style>
