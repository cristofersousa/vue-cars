export default {

  getCars: (context) => {
    let cars = localStorage.getItem('cars');

    if (!cars) {
      cars = [
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

      localStorage.setItem('cars', JSON.stringify(cars));
    } else {
      cars = JSON.parse(cars);
    }

    context.commit('getCars', cars);
  },

  addCar: (context, payload) => {
    const cars = context.state.items;

    cars.push(payload);

    context.commit('getCars', cars);
    context.dispatch('syncStorage', cars);
  },

  selectedCars: (context, payload) => {
    context.commit('selectedCars', payload);
  },

  deleteCars: (context) => {
    let cars = context.state.items;
    const selected = context.state.selected;

    cars = cars.filter(car => selected.indexOf(car) === -1);

    context.commit('deleteCars', cars);
    context.dispatch('syncStorage', cars);
  },

  syncStorage: (context, cars) => {
    localStorage.setItem('cars', JSON.stringify(cars));
  },

  goToPage: (context, page) => {
    context.commit('goToPage', page);
  },

};
