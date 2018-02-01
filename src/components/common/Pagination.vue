<template>
  <div id="pagination">
    <div class="columns">
      <div class="column is-12">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">

          <ul class="pagination-list">
            <li>
              <a class="pagination-previous" @click.stop="prev">
                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
              </a>
            </li>
            <li
              v-for="(page, index) in getPaginations"
              :key="index"
              @click.stop="goTo(page)"
              :class="{'is-active': page === currentPage}">
              <a class="pagination-link">
                  {{ page }}
              </a>
            </li>
            <li>
            <a class="pagination-next" @click.stop="next">
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
            </li>
          </ul>

        </nav>
      </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'pagination',

  methods: {
    prev() {
      if (this.currentPage <= 1) {
        return;
      }
      this.goToPage(this.currentPage - 1);
    },

    next() {
      if (this.currentPage >= this.getPaginations) {
        return;
      }
      this.goToPage(this.currentPage + 1);
    },

    goTo(page) {
      this.goToPage(page);
    },

    ...mapActions([
      'goToPage',
    ]),
  },

  computed: {
    ...mapGetters([
      'getPaginations',
      'currentPage',
    ]),
  },
};
</script>
