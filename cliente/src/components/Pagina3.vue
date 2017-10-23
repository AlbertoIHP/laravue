<template>

  <section class="container well">

    <h3> Ciudades </h3>
    <table class="table table-bordered table-hovered">

      <thead>
        <th>Email</th>
        <th>Password</th>
      </thead>

      <tbody>
        <tr v-for="user in users">
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
        </tr>
      </tbody>
    </table>

  </section>

</template>








<script>
  //Importamos el servicio
  import { UserService } from '@/services'
  const servicioUsuario = new UserService('users')


  export default
  {
    data: () => ({
      users: []
    }),
    mounted ()
    {
      servicioUsuario.query().then(data => {
        console.log(data)
        this.users = data.body.data
      })
    }
  }
</script>







<style scoped>

</style>
