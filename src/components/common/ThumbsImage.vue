<template>
  <div id="ThumbsImage">
  <div class="is-active modal">
    <div class="modal-background"></div>
      <div class="modal-content">
        <p class="modal-card-title">Thumbs Car</p>
          <button class="delete" aria-label="close" @click="tooggleModal"></button>
          <div class="box">
            <img :src="picture">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ThumbsImage',
  props: ['picture'],
  data() {
    return {

    };
  },
  methods: {
    ...mapGetters({
      cars: 'getCars',
    }),
    tooggleModal() {
      this.$emit('tooggleModal');
    },
  },

};

</script>
