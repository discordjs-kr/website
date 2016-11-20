<template>
  <div class="class-prop class-item" :id="`doc-for-${prop.name}`">
    <h3><router-link :to="{ name: 'docs-class', query: { scrollTo: prop.name } }">.{{ prop.name }}</router-link></h3>

    <div class="class-item-details">
      <p v-html="description"></p>
      <param-table :params="prop.props" :docs="docs" v-if="prop.props.length > 0" />
      <div class="prop-type">
        Type:
        <types v-for="type in prop.type.types" :names="type" :docs="docs" />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Types from '../Types.vue';
  import ParamTable from './ParamTable.vue';

  export default {
    name: 'class-property',
    props: ['prop', 'docs'],
    components: {
      Types,
      ParamTable,
    },

    data() {
      return {
        description: Vue.filter('marked')(this.prop.description),
      };
    },
  };
</script>

<style lang="scss">
  @import '../../../styles/theming';

  .class-prop p {
    margin: 0 0 8px 0;
  }

  .prop-type {
    color: lighten($color-content-text, 35%);
    font-weight: bold;
  }
</style>