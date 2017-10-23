//Importamos la clase default para APIs que construimos
import ApiService from './ApiDefault.service'

//Creamos un nuevo servicio y lo hacemos heredar todo lo que programamos de dicho servicio
class UserService extends ApiService {
  //En el constructor entregamos solamente el endpoint
  constructor (endpoint) {
    //y utilizamos el metodo super para ejecutar el constructor de la clase padre y tener todo lo programado de dicha clase
    super(endpoint)

    //Asignamos una variable del nombre por si fuera necesario el endpoint
    this.name = endpoint
  }
}

//Exportamos como constante el servicio ya instanciado, entonces es un objeto
export default UserService
