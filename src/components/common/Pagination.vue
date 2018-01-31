<template>
  <div id="pagination">
    <div class="columns">
      <div class="column is-12">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <a class="pagination-previous">
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
          </a>
          <ul class="pagination-list">
            <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a class="pagination-link" aria-label="Goto page 2">2</a></li>
          </ul>
          <a class="pagination-next">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
          </a>
        </nav>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data() {
    return {

    };
  },
};
</script>
