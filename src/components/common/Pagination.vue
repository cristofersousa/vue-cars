<template>
  <div id="pagination">
    <div class="columns">
      <div class="column is-12">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">

          <ul class="pagination-list">
            <li>
              <a class="pagination-previous" @click="previous">
                 <i class="fa fa-angle-double-left" aria-hidden="true"></i>
             </a>
            </li>
            <li v-for="page in totalPages" :key="page.id">
              <a class="pagination-link"
                @click="goTo(page - 1)"
                aria-label="Goto page page">
                {{ page }}
              </a>
            </li>
            <li>
              <a class="pagination-next" @click="next">
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
export default {
  name: 'pagination',
  props: ['totalPages', 'pageIndex'],
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {
    next() {
      this.goTo(this.pageIndex + 1);
    },
    previous() {
      this.goTo(this.pageIndex - 1);
    },
    goTo(page) {
      this.$emit('paginate', page);
    },
  },
  created() {
  },
};
</script>
