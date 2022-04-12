<template>
  <div class="searchBooksContainer">
    <MyNav />
    <div class="containerNav">
      <Search />
    </div>
    <div
      v-if="$store.totalResults === 0 || $store.bookSearchQuery === null"
    >
      Libro no encontrado
    </div>
    <FoundBooksList />
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import MyNav from '../components/MyNav.vue'
import Footer from '../components/Footer.vue'
import Search from '../components/Search.vue'
import FoundBooksList from '../components/FoundBooksList.vue'
export default {
  name: 'IndexPage',
  components: {
    MyNav,
    Search,
    FoundBooksList,
    Footer
  },
  mounted () {
    if (typeof this.bookSearchQuery === typeof '') {
      this.getBooksByTitle()
    }
  },
  methods: {
    ...mapActions({
      getBooksByTitle: 'getBooksByTitle'
    }),
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    }),
    ...mapGetters({
      totalResults: 'totalResults'
    })
  }
}
</script>
<style scoped>
  .searchBooksContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #ECECEC;
  }
  .containerNav{
    display: flex;
    justify-content: center;
  }
</style>
