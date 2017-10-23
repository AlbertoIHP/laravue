<template>
  <section>

    <button type="button" @click="goPagina1()">Vamos a la Pagina1 !  (La ruta es / )</button>
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
        credentialService: new LocalStorageCredentialsService()
      }
    },
    methods:
    {
      goPagina1 ()
      {
          this.$router.push('/')
      }
    }
  }
</script>




<style scoped>

</style>
