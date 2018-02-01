export default {

  getCars: (state) => {
    const start = (state.currentPage * 5) - 5;
    const end = start + 5;
    const items = state.items.slice(start, end);

    return items;
  },

  getPaginations: state => Math.ceil(state.items.length / 5),

  currentPage: state => state.currentPage,

};
