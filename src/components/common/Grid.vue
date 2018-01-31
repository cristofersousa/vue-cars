<template>
  <div id='grid'>
    <div class='container'>
      <div class="is-12">
        <table class='table is-striped is-hoverable  is-fullwidth'>
          <thead>
            <tr>
              <th>
                <label class="checkbox">
                  <input type="checkbox">
                </label>
              </th>
              <th @click="order('placa')"> Placa </th>
              <th @click="order('modelo')"> Modelo </th>
              <th @click="order('marca')"> Marca </th>
              <th> Foto </th>
              <th @click="order('combustivel')"> Combustível </th>
              <th> Valor </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="car in cars" :key="car.id">
              <td>
                <label class="checkbox">
                  <input
                    @change="selectCar"
                    type="checkbox"
                    v-model="removeCars"
                    :value="car">
                </label>
              </td>
              <td> {{ car.placa }} </td>
              <td> {{ car.modelo }} </td>
              <td> {{ car.marca }} </td>
              <td>
                  <div v-if="car.imagem !== null">
                    <a href="#" > Imagem </a>
                  </div>
                  <div v-else>
                          Sem Foto
                  </div>
              </td>
              <td> {{ car.combustivel }} </td>
              <td> {{ car.valor }} </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  props: ['cars'],
  data() {
    return {
      removeCars: [],
    };
  },

  methods: {
    selectCar() {
      this.$emit('selectCar', this.removeCars);
    },
    order(tipo) {
      this.$emit('order', tipo);
    },
  },
};
</script>

<style>

.table thead td, .table thead th {
    border-width: 0 0 2px;
    color: #3C5E7D;
    background: #F8FAFC;
    font-size: .9em;
    font-weight: bold;
}

.table td, .table th {
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px;
    padding: 0.5em 0.75em;
    vertical-align: top;
    color: #587692;
    font-size: .9em;
}

.table.is-hoverable.is-striped
    tbody tr:not(.is-selected):hover {
    background-color: #D8E9FB;
    cursor: pointer;
  }
</style>
