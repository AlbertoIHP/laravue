//Importamos las direcciones declaradas como constantes
import { address } from '@/constants'

//La instancia de Vue
import Vue from 'vue'

//Traemos resource par aconsumir APIs
import VueResource from 'vue-resource'


//Usamos la librerai
Vue.use(VueResource)

//Esta clase tiene la particularidad de ser estandar para cualqueir endpoint

class ApiConnect
{

  //En el constructor concatenaremos el endpoint (Ej la constantes es www.mipagina.com/api/ y el endpoint libros donde se consumen libros, entonces quedara finalmente resource como www.mipagina.com/api/libros )
  constructor (route)
  {
    //Como usamos resource de la instancia de Vue, nose genera todos los metodos HTTP para consumir una API mediatne el metodo query, del objeto que esta genera. resource solo necesita la direccion de la api para poder ser instanciada
    this.resource = Vue.resource(address.api + route)
  }

  //Este metodo permite obtener la direccion completa hacia la API y su endpoint
  getResource ()
  {
    return this.resource
  }


  //query
  query ()
  {
    //Mediante query obtenemos todos los valores del endpoint (GET)
    return this.resource.query()
  }



  getById (id)
  {
    // Con get y entregando el id obtenemos uno especifico (GET con ID)
    return this.resource.get({id})
  }



  save (model)
  {
    //Con save podemos guardar un elemento, entregando solamente un objeto JSON con ese formato (POST)
    return this.resource.save(model)
  }



  update (id, model)
  {
    //Con update podemos actualizar unelemento, recibiendo el elemento en JSON con dicho formato, y la id del elemento (PUT)
    return this.resource.update({id}, model)
  }



  destroy (id)
  {
    //Con destroy podemos eliminar un registro de la API mediante unicametne su ID, (DELETE)
    return this.resource.delete({id})
  }
}

//Finalmente se exporta la clase
export default ApiConnect
