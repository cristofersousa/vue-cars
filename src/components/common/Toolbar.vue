<template>
  <div id="toolbar">
    <div class="container">

        <div class="columns">
          <div class="column is-6">
            <btn-success
              @showModal="tooggleModal">
            </btn-success>
            <btn-remove>
            </btn-remove>
          </div>
          <div class="column is-6">
          <div class="field has-addons is-pulled-right">
            <div class="control">
              <input
                class="input"
                v-model="search"
                type="text"
                placeholder="Pesquisar">
            </div>
            <div class="control">
              <a class="button is-info"
                @click="searchCar()">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
            </div>

        </div>
      </div>

      <new-car
        v-show="visibility"
        @tooggle="tooggleModal"
      >
      </new-car>

    </div>
  </div>
</template>

<script>
import BtnSuccess from './Buttons/ButtonSuccess';
import BtnRemove from './Buttons/ButtonDanger';
import NewCar from './../car/NewCar';

export default {
  name: 'toolbar',
  components: {
    BtnSuccess,
    BtnRemove,
    NewCar,
  },
  data() {
    return {
      visibility: false,
      search: '',
    };
  },
  methods: {
    tooggleModal() {
      this.visibility = !this.visibility;
    },
    searchCar() {
      this.$emit('searchCar', this.search);
      this.search = '';
    },
  },

  watch: {
    search() {
      if (this.search.length >= 3) {
        this.$emit('searchCar', this.search);
      }

      if (this.search.length === 0) {
        this.$emit('searchCar', this.search);
      }
    },
  },
};
</script>
<style>
  .button.is-info {
    background-color: #F1F4F9;
    border-color: #dbdbdb;
    color: #3a5f7f;
  }
</style>
