<template>
  <div class="iconsNav">
    <div>
      <img src="../static/icons/libreta.png">
      <NuxtLink to="/libraryMenu">
        {{ libraryText }}
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IconsMenuNav',
  data () {
    return {
      libraryText: 'Biblioteca'
    }
  }
}
</script>
<style scoped>
	.iconsNav{
    display: inline-flex;
		align-items: center;
  }
	.iconsNav div{
		display: flex;
    align-items: center;
    margin-right: 1%;
	}
  .iconsNav img{
    max-width: 40px;
    margin: 5px;
  }
  @media (max-width: 800px) {
    .iconsNav img{
      max-width: 20px;
      margin: 5px;
    }
  }
</style>
