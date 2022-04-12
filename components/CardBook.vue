<template>
  <div class="bodyContainer" @click="openbookInfo">
    <div class="containerImg">
      <img
        v-if="!book-thumbnail"
        src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
        alt="no-cover"
      >
      <img v-else :src="bookThumbnail" alt="book-cover">
    </div>
    <div class="bookImformation">
      <p><strong>{{ title }}</strong></p>
      <p>{{ bookAuthors }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CardBook',
  props: {
    bookId: String,
    book: Object,
    title: String,
    authors: Array,
    bookThumbnail: String
  },
  computed: {
    bookAuthors () {
      if (this.authors.length === 0) {
        return []
      }
      return this.authors.join(', ')
    },
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  },
  methods: {
    openbookInfo () {
      // debugger
      this.$router.push(`/book-info/${this.bookId}`)
    },
  }
}
</script>
<style scoped>
  .bodyContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 30px 1px #756E84;
    background: #c39caa6e;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    width: 25%;
    height: 200px;
    margin: 2% 2%;
  }
  .bodyContainer:hover {
    transform: scale(1.2);
  }
  .containerImg{
    width: 100px;
  }
  .containerImg img{
    width: 150px;
    height: auto;
  }
  .bookImformation{
    margin: 2% 1%;
    width: 60%;
    justify-content: center;
  }
  .bookImformation p{
    margin: 5% 2%;
    width: 100%;
  }
</style>
