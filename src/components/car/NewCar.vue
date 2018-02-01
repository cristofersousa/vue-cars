<template>
    <div id="new-car">
      <div class="is-active modal">
        <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">

          <div class="field">
            <label class="label">Placa</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder=""
                  v-model="newCar.placa" maxlength="8">
                  <p class="help">e.g: XXX-9999</p>
              </div>
          </div>

           <div class="field">
            <label class="label">Modelo</label>
              <div class="control">
                <input class="input" type="text" placeholder="" v-model="newCar.modelo">
              </div>
          </div>

           <div class="field">
            <label class="label">Marca</label>
              <div class="control">
                <input class="input" type="text" placeholder="" v-model="newCar.marca">
              </div>
          </div>

          <div class="field">
            <label class="label">Imagem</label>
              <div class="control">
                <input class="input" type="text" placeholder="" v-model="newCar.foto">
              </div>
          </div>

           <div class="field">
            <label class="label">Combustível</label>
              <div class="control">
                <input class="input" type="text" placeholder="" v-model="newCar.combustivel">
              </div>
          </div>

           <div class="field">
            <label class="label">Valor</label>
              <div class="control">
                <input class="input" type="text" placeholder="" v-model="newCar.valor">
              </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button
                class="button is-link"
                @click="saveCar"
                :disabled="isInvalid">
                  Salvar
              </button>
            </div>
            <div class="control">
              <button
                class="button is-text"
                @click="tooggleModal">
                Cancelar
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'newcar',
  data() {
    return {
      visible: false,
      newCar: {
        placa: '',
        modelo: '',
        marca: '',
        foto: '',
        combustivel: '',
        valor: '',
      },
    };
  },
  computed: {
    isInvalid() {
      const placa = this.newCar.placa;
      const modelo = this.newCar.modelo;
      if (placa === '' || modelo === '') {
        return true;
      }
      return false;
    },
    // validPlaca() {
    //   const regex =
    // },
  },
  watch: {
    placa(valAtual, valAnterior) {
      const pattern = valAtual.split('');
      if (pattern.length >= 3 && pattern.indexOf('-') === -1) {
        pattern.splice(4, 0, '-');
        this.newCar.placa = pattern.join('');
      }
    },
  },
  methods: {
    cleanForm() {
      this.newCar = {
        placa: '',
        modelo: '',
        marca: '',
        foto: '',
        combustivel: '',
        valor: '',
      };
    },
    saveCar() {
      this.addCar(this.newCar);
      this.cleanForm();
      this.tooggleModal();
    },
    tooggleModal() {
      this.$emit('tooggle');
    },

    ...mapActions([
      'addCar',
    ]),
  },
};
</script>


<style>
  .label {
    color: #3a5f7f;
    display: block;
    font-size: .9rem;
    font-weight: 700;
    text-align: left;
  }

