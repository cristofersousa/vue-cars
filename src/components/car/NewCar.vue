<template>
    <div id="new-car">
      <div class="is-active modal">
        <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">

          <div class="field">
            <label class="label">Placa</label>
              <div class="control">
                <input class="input" type="text" placeholder="" v-model="newCar.placa" maxlength="8">
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

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Combustível</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Gasolina</option>
                  <option>Alcool</option>
                  <option>Flex</option>
                </select>
              </div>
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
  },
  watch: {
    placa(valAtual) {
      const pattern = valAtual.split('');
      if (pattern.length >= 3 && pattern.indexOf('-') === -1) {
        pattern.splice(4, 0, '-');
        this.newCar.placa = pattern.join('');
      }
    },
  },
  methods: {
    cleanForm() {
      this.newCar.placa = '';
      this.newCar.modelo = '';
      this.newCar.marca = '';
      this.newCar.foto = '';
      this.newCar.combustivel = '';
      this.newCar.valor = '';
    },
    saveCar() {
      this.$emit('saveCar', this.newCar);
      // this.cleanForm();
      this.tooggleModal();
    },
    tooggleModal() {
      this.$emit('tooggle');
    },
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

  /* .input, .textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1.2rem;
    height: 2.25em;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
    background-color: white;
    border-bottom: 1px solid #999;
    color: #363636;
    -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0);
    max-width: 100%;
    width: 100%;
}

  .input:focus, .input.is-focused, .input:active, .input.is-active,
  .textarea:focus, .textarea.is-focused, .textarea:active, .textarea.is-active {
    border-color: #0088ed;
    -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0);
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0);
  } */

</style>
