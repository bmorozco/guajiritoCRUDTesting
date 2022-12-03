# GuajiritosTest
##### Autor: Betsy Mart�nez Orozco

##Descripci�n del proyecto
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1. tiene como **objetivo**:
 - login/logout simple
 - men� (navbar, sidebar) 
 - listar un conjunto de usuarios 
 - hacer un CRUD (insertar, editar, eliminar) de usuarios
 - manejar las rutas por m�dulos
 - consumir datos de una apiRest, estos se pueden ver aqu� [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
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
 ####M�dulos:
  + SecurityModule (Manejar seguridad del proyecto)
  + AppHomeModule (Home del proyecto)
  + AdministrationModule (Administraci�n de datos)
 ####Servicios:
  * UserService (Acciones sobre usuarios)
  * LoginService (Entrada/Salida de la aplicaci�nn)
 ####Interface
  - User (Clase usuario)
  - Address (Direcci�n de los usuarios)
  - Company (Compa��a a la cual pertenece el usuario)
  - Geo (Localizaci�n)

## Servidor de desarrollo
Correr`ng serve` para mostrar el sevirvidor de desarrollo. Navavegar a `http://localhost:4200/`. La aplicaci�n se racargar� autom�ticamente si existiera alg�n cambio en el c�digo de un fichero.

## Estructura de c�digo
Ejecutar `ng generate component component-name` para crear un componente nuevo. Tambi�n se puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcci�n
Ejecutar `ng build` para construir el  proyecto. Los artefactos creados se almacenan en la carpeta`dist/`. Usar `--prod` para una compilaci�n de producci�n.

## Realizar pruebas unitarias
Ejecutar `ng test` para realizar pruebas unitarias via [Karma](https://karma-runner.github.io).

## Realizar pruebas end-to-end
Ejecutar `ng e2e` para realizar pruebas end-to-end tests via [Protractor](http://www.protractortest.org/).

## M�s ayuda
Para obtener m�s ayuda acerca de Angular CLI usar `ng help` o revisar [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
