<template>
    <div id="new-car">
      <div class="is-active modal">
        <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">

          <div class="field">
            <label class="label">Placa <sup>*</sup></label>
              <div class="control">
                <input
                  :class="['input', {'is-success':!validInput.placa, 'is-danger':validInput.placa}]"
                  type="text"
                  placeholder=""
                  pattern= "[A-Za-z]{3}-[0-9]{4}"
                  v-mask="'AAA-####'"
                  v-model="newCar.placa"
                  maxlength="8"
                  >
                  <p class="help">e.g: XXX-9999</p>
              </div>
          </div>

           <div class="field">
            <label class="label">Modelo <sup>*</sup></label>
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
                <input class="input" type="text" placeholder="" v-model="newCar.imagem">
              </div>
          </div>

           <div class="field">
            <label class="label">Combustível</label>
              <div class="control">
                <input class="input" type="text" placeholder="" v-model="newCar.combustivel">
              </div>
          </div>

           <div class="field">
            <label class="label">Valor <sup>*</sup></label>
              <div class="control">
                <input class="input" type="text" placeholder=""
                  v-money="money" v-model.lazy="newCar.valor">
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
        imagem: '',
        combustivel: '',
        valor: '',
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false,
      },
    };
  },
  computed: {
    isInvalid() {
      const plate = this.newCar.placa;
      const model = this.newCar.modelo;
      const price = this.newCar.valor;
      if (plate === '' || model === '' || price === '') {
        return true;
      }
      return false;
    },
    validInput() {
      return {
        placa: (this.newCar.placa.length < 8),
      };
    },
  },
  watch: {
  },
  methods: {
    cleanForm() {
      this.newCar = {
        placa: '',
        modelo: '',
        marca: '',
        imagem: '',
        combustivel: '',
        valor: '',
      };
    },
    saveCar() {
      if (this.newCar.imagem === '') {
        this.newCar.image = null;
      }
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
  isImage() {
    let img = this.newCar.foto;
    if (img === '' || img === null) {
      img = 'Sem foto';
      return img;
    }
    return img;
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

