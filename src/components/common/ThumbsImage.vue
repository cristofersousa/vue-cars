<template>
  <div id="ThumbsImage">
  <div class="modal">
    <div class="modal-background"></div>
      <div class="modal-content">
        <p class="modal-card-title">Thumbs Car</p>
          <button class="delete" aria-label="close"></button>
          <div class="box">
            <img src="http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ThumbsImage',
  data() {
    return {

    };
  },
  methods: {
    ...mapGetters({
      cars: 'getCars',
    }),
    closemodal() {
      this.$emit('closeModal');
    },
  },

};

</script>
