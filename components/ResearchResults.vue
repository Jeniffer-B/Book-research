<template>
  <div class="bodyContainer" @click="openbookInfo">
    <div class="containerImg">
      <img
        v-if="!book.volumeInfo.imageLinks"
        src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
        alt="no-cover"
      >
      <img v-else :src="book.volumeInfo.imageLinks.thumbnail" alt="book-cover">
    </div>
    <div class="bookImformation">
      <p><strong>{{ book.volumeInfo.title }}</strong></p>
      <p>{{ bookAuthors }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BookInfoCard',
  props: {
    book: Object
  },
  computed: {
    bookAuthors () {
      if (this.book.volumeInfo.authors === undefined || this.book.volumeInfo.authors.length === 0) {
        return ''
      }
      return this.book.volumeInfo.authors.join(', ')
    }
  },
  methods: {
    openbookInfo () {
      this.$router.push(`/book-info/${this.book.id}`)
    },
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  }
}
</script>
<style scoped>
  .bodyContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 10px 15px 1px #756E84;
    background: #c39caa6e;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    width: 25%;
    margin: 2% 2%;
    transition: transform .2s;
  }
  .bodyContainer:hover {
    transform: scale(1.2);
  }
  .containerImg{
    width: 20%;
    margin: 2% 2%
  }
  .containerImg img{
    width: 150px;
  }
  .bookImformation{
    margin: 2% 0%;
    width: 60%;
    justify-content: center;
  }
  .bookImformation p{
    font-size: 1.3em;
    width: 100%;
  }
  /* Tablet */
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:portrait) {
  .bodyContainer {
    width: 70%;
    margin: 4% 2%;
  }
}
@media (min-width: 991.98px) and (max-width: 1199.98px)and (orientation:landscape) {
  .bodyContainer {
    width: 45%;
    margin: 4% 2%;
  }
  .bookImformation p{
    font-size: 0.8em;
  }
}
/*Mobile*/
@media (max-width: 575.98px)and (orientation:portrait) {
  .bodyContainer {
    width: 90%;
    margin: 4% 2%;
  }
  .bookImformation p{
    font-size: 0.7em;
  }
}
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:landscape) {
  .bodyContainer {
    flex-direction: column;
    width: 40%;
    margin: 2% 2%;
  }
  .bookImformation{
    margin: 2% 2%;
    width: 80%;
    justify-content: center;
  }
  .bookImformation p{
    font-size: 0.7em;
  }
}
</style>
