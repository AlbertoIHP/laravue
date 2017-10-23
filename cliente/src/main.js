// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//Instancia principal de Vue
import Vue from 'vue'

//Componentes
import App from './App'

//Fichero de configuracion de rutas
import router from './router'


//Servicios
import { LocalStorageCredentialsService } from './services';

//Las constantes en este caso son variables que no cambian en toda la ejecucion del codigo
import {address} from './constants'

//Libreria para conectarnos a APIs y consumirlas
import VueResource from 'vue-resource'

//Instanciamos la clase de credenciales para poder ocupar sus metodos mediante un objeto
const credentials = new LocalStorageCredentialsService()


Vue.config.productionTip = false
//Le entregamos a la instancia de Vue los recursos para consumir la API
Vue.use(VueResource)


//Agregamos cabeceras a todas las peticiones modificando los interceptores de la INSTANCIA de Vue, cosa de que cualquier elemento que haga uso de esta instancia utilizara estas cabezeras
Vue.http.interceptors.push((request, next) => {

  //Se agrega el token de autorizacion, mediante el objeto de la clase LocalStorageCredentialsService
  request.headers.set('Authorization', credentials.getToken())

  //Se agrega la especificacion de Content-Type para que acepte ficheros de tipo JSON
  request.headers.set('Accept', 'application/json')

  //Hacemos referencia a la instancia de Vue con this
  let vm = this

  //Cuando se realicen peticiones a una API, cualquiera sea, se quedara esperando con una callback function y se seguira una logica en el cliente
  next( response => {

    //Si el servidor responde con un 401
    if (response.status === 401) {
      //Limpiamos las credenciales
      credentials.clearCredentials()

      //Redirigimos al cliente de donde este ubicado a la Single Page Application, y esta a su vez al index por default que tenga configurado segun las rutas
      window.location.href = (address.spa)

      vm.$dispatch('logout')
    }

  })


})




//Instanciamos finalmente a Vue, y enlazamos dicha instancia, al elemento con la id app de nuestro index.html ubicado en la parte principal de la carpeta del proyecto, ademas le entregamos la configuracion de rutas, el template con el que puede ser utilziado, y finalmente nuestro componente principal ubicado en App.vue
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
