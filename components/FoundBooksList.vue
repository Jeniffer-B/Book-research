<template>
  <div class="listBg">
    <ResearchResults
      v-for="item in bookSearchResults"
      :key="item.id"
      :book="item"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ResearchResults from './ResearchResults.vue'
export default {
  name: 'FoundBooksList',
  components: {
    ResearchResults
  },
  computed: {
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  }

}
</script>
<style scoped>
  .listBg{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
