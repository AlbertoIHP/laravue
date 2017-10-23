<template>
  <section>
    <navigation></navigation>
    <div class="abajoNavBar">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  //El script puede ser escrito como si se tratara de un fichero JS
  import navigation from '@/components/Navbar'

  //Luego exportamos el componente de navegacion para ser utilziado en el template
  export default {
    components: {
      navigation
    }
  }
</script>

<style>
.abajoNavBar
  {
    padding-top: 3%
  }
</style>
