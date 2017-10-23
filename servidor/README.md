# Laravel 5 API RESTful Generator

## Instalacion

```
composer install
```
 
## Crear fichero .env utilizando .env
## Agregar a .env la base de datos, usuario y contraseña donde se leeran los esquemas 
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=NOMBRE_BD
DB_USERNAME=NOMBRE_DE_USUARIO
DB_PASSWORD=CONTRASEÑA_DE_USUARIO

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
```
## Generar clave de aplicacion

```
php artisan key:generate
```



## Utilizar el siguiente comando para crear las rutas, modelos, controladores, etc. Para esto es necesario poner en primer lugar en singular y en ingles (por ejemplo usuario se usa User) y luego el nombre de la tabla que debio ser modelada en plural y todos sus elementos en ingles (por ejemplo usuario se usa users)

```
php artisan infyom:api_scaffold User --fromTable --tableName=users --save
```

## Servir la aplicacion

```
php artisan serve
```
## Acceder a la documentacion de la api

```
localhost:8000/api/docs
```

## Acceder a la aplicacion generada en Blade

```
localhost:8000
```

## consumir la api

```
localhost:8000/api/users
```

## Para que swaggervel funcione en el "try it out" 
## es necesario añadir a la ruta de la api /v1 a cada ruta declarada en routes/api.php

```
Antes: Route::resource('users', 'UserAPIController');

Despues: Route::resource('v1/users', 'UserAPIController');
```
