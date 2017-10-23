
//Instancia de Vue
import Vue from 'vue'

//Vue router para el manejo de rutas
import Router from 'vue-router'

//Importamos todos los componentes que deseemos enrutar
import Pagina1 from '@/components/Pagina1'
import Pagina2 from '@/components/Pagina2'
import Pagina3 from '@/components/Pagina3'


//Entregamos a Vue el componente de rutas para que este lo utilice en todos los sub componentes, o todos aquellos que utilicen esta instancia
Vue.use(Router)

export default new Router({
  routes:
  [
    {
      path: '/',
      name: 'Pagina1',
      component: Pagina1
    },
    {
      path: '/pagina2',
      name: 'Pagina2',
      component: Pagina2
    },
    {
      path: '/pagina3',
      name: 'Pagina3',
      component: Pagina3
    }
  ]
})
