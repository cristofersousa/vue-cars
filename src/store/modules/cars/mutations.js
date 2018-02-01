export default {

  getCars: (state, payload) => {
    state.items = payload;
  },

  selectedCars: (state, payload) => {
    state.selected = payload;
  },

  deleteCars: (state, cars) => {
    state.items = cars;
  },

  goToPage: (state, page) => {
    state.currentPage = page;
  },

};
