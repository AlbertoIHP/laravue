<template>
  <section>

    <button class="form-group" type="button" @click="goPagina2()">Vamos a Pagina2!</button>
    <input type="text" class="form-group" v-model="miVariable">
    {{miVariable}}

  </section>
</template>


<script>
  import { LocalStorageCredentialsService } from '@/services';

  export default {
    data () {
      return {
        miVariable: "",
        lsCredentialService: new LocalStorageCredentialsService()
      }
    },
    methods:
    {
      goPagina2 ()
      {
          this.$router.push('/pagina2')
      }
    }
  }
</script>




<style scoped>

</style>
