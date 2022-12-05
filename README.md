# GuajiritosTest
##### Autor: Betsy Martínez Orozco

##Descripción del proyecto
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1. tiene como **objetivo**:
 - login/logout simple
 - menú (navbar, sidebar) 
 - listar un conjunto de usuarios 
 - hacer un CRUD (insertar, editar, eliminar) de usuarios
 - manejar las rutas por módulos
 - consumir datos de una apiRest, estos se pueden ver aquí [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
 - emplear [Angular Material](https://material.angular.io/guide)
 
 ### Estructura del proyecto
 ####Componentes:
  - UserComponent
  - UserDetailsComponent
  - AdministrationComponent
  - HomeHeaderComponent
  - HomeSidebarComponent
  - AppHomeComponent
  - LoginComponent
  - AppComponent
 ####Módulos:
  + SecurityModule (Manejar seguridad del proyecto)
  + AppHomeModule (Home del proyecto)
  + AdministrationModule (Administración de datos)
 ####Servicios:
  * UsersService (Acciones sobre usuarios)
  * LoginService (Entrada/Salida de la aplicaciónn)
 ####Interface
  - User (Clase usuario)
  - Address (Dirección de los usuarios)
  - Company (Compañía a la cual pertenece el usuario)
  - Geo (Localización)

## Servidor de desarrollo
Correr`ng serve` para mostrar el sevirvidor de desarrollo. Navavegar a `http://localhost:4200/`. La aplicación se racargará automáticamente si existiera algún cambio en el código de un fichero.

## Estructura de código
Ejecutar `ng generate component component-name` para crear un componente nuevo. También se puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción
Ejecutar `ng build` para construir el  proyecto. Los artefactos creados se almacenan en la carpeta`dist/`. Usar `--prod` para una compilación de producción.

## Realizar pruebas unitarias
Ejecutar `ng test` para realizar pruebas unitarias via [Karma](https://karma-runner.github.io).

## Realizar pruebas end-to-end
Ejecutar `ng e2e` para realizar pruebas end-to-end tests via [Protractor](http://www.protractortest.org/).

## Más ayuda
Para obtener más ayuda acerca de Angular CLI usar `ng help` o revisar [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
