<template>
  <div id="app">
    <div class="container-fluid">

    <navbar></navbar>

    <toolbar
      @addList="updateCars"
      @deleteCars="deleteCars"
      @searchCar="searchCar">
    </toolbar>

    <grid
      @order="order"
      :cars="page"
      @selectCar="selectCars">
    </grid>

    <pagination
      :totalPages="totalPages"
      :pageIndex="pageIndex"
      @paginate="paginate">
    </pagination>

  </div>
  </div>
</template>

<script>
import Navbar from './components/common/Navbar';
import Toolbar from './components/common/Toolbar';
import Grid from './components/common/Grid';
import Pagination from './components/common/Pagination';

export default {
  name: 'App',
  components: {
    Navbar,
    Toolbar,
    Grid,
    Pagination,
  },
  data() {
    return {
      cars: [],
      selected: [],
      filtro: '',
      page: [],
      pageIndex: 0,
      totalPages: 0,
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
  },
  methods: {
    updateCars(car) {
      this.cars.push(car);
      this.saveLocalStorage();
    },
    saveLocalStorage() {
      localStorage.setItem('cars', JSON.stringify(this.cars));
    },
    deleteCars() {
      this.cars = this.cars.filter(car => this.selected.indexOf(car) === -1);
      this.saveLocalStorage();
    },
    selectCars(cars) {
      this.selected = cars;
    },
    searchCar(search) {
      this.filtro = search;
      this.paginate();
    },
    order(tipo) {
      this.cars = this.cars.sort((elemOlder, elemNew) =>
        (elemOlder[tipo].length > elemNew[tipo].length ? 1 : -1));
    },

    paginate(pageIndex = 0) {
      let cars = this.cars;

      if (this.filtro) {
        const exp = new RegExp(this.filtro.trim(), 'i');
        cars = cars.filter(car => exp.test(car.combustivel) || exp.test(car.marca));
      }

      this.pageIndex = pageIndex;
      this.totalPages = Math.ceil(cars.length / 5);
      const start = this.pageIndex * 5;
      const end = start + 5;
      console.log('page', pageIndex, start, end);
      this.page = cars.slice(start, end);
    },
  },
  created() {
    const cars = localStorage.getItem('cars');
    if (!cars) {
      this.cars = [
        { combustivel: 'Flex',
          imagem: null,
          marca: 'Volkswagem',
          modelo: 'Gol',
          placa: 'FFF-5498',
          valor: '20000',
        },
        { combustivel: 'Gasolina',
          imagem: null,
          marca: 'Volkswagem',
          modelo: 'Fox',
          placa: 'FOX-4125',
          valor: '20000',
        },
        { combustivel: 'Alcool',
          imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
          marca: 'Volkswagen',
          modelo: 'Fusca',
          placa: 'PAI-4121',
          valor: '20000',
        },
      ];
    } else {
      this.cars = JSON.parse(cars);
    }
    this.paginate();
    console.log('teste', this.cars);
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

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
