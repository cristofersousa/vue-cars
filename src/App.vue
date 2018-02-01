<template>
  <div id="app">
    <div class="container-fluid">
    <navbar></navbar>
    <toolbar
      @searchCar="searchCar">
    </toolbar>
    <grid
      @order="order"
      :cars="listCars">
    </grid>

  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from './components/common/Navbar';
import Toolbar from './components/common/Toolbar';
import Grid from './components/common/Grid';

export default {
  name: 'App',
  components: {
    Navbar,
    Toolbar,
    Grid,
  },
  data() {
    return {
      filtro: '',
    };
  },
  computed: {
    listCars() {
      if (this.filtro) {
        const exp = new RegExp(this.filtro.trim(), 'i');
        return this.cars.filter(car => exp.test(car.combustivel) || exp.test(car.marca));
      }
      return this.cars;
    },
    ...mapGetters({
      cars: 'getCars',
    }),
  },
  methods: {
    saveLocalStorage() {
      localStorage.setItem('cars', JSON.stringify(this.cars));
    },
    searchCar(search) {
      this.filtro = search;
    },
    order(tipo) {
      this.cars = this.cars.sort((elemOlder, elemNew) =>
        (elemOlder[tipo].length > elemNew[tipo].length ? 1 : -1));
    },

    ...mapActions([
      'getCars',
    ]),
  },
  created() {
    this.getCars();
  },
};
</script>

<style lang="sass">
  @import '~bulma/bulma.sass'
</style>

<style>
  body {
    height: 100vh;
    background-color:#F1F4F9;
  }

  #app {
    color: #2c3e50;
  }
</style>
