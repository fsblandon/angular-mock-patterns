# Ejecutar aplicación

1. Descargar zip del proyecto o clonar el repositorio en la rama main `git clone https://github.com/fsblandon/angular-mock-patterns.git`
2. Entrar al directorio del proyecto `cd angular-mock-patterns`
3. Instalar dependencias `npm i`
4. Ejecutar la aplicación `ng serve -o`

# Pasos para realizar ejercicio

La idea ahora es añadir en un componente de angular listar los patrones estructurales y pintarlos debajo de los creacionales

1. Crea un componente para lista de patrones estructurales `ng generate component ./components/estructurales`.
2. Busca el archivo `estructurales.component.ts` y en el importe el archivo `mock.estructurales.ts` y asignalo a un atribulo tipo lista dentro del metodo ngOnInit, puedes revisar el archivo `creacionales.component.ts`.
3. Usa ngFor para recorrer la lista de patrones estructurales, para esto puedes mirar el archivo `creacionales.component.html`.
4. Ahora añade el tag `<app-estructurales></app-estructurales>` en `app.componente.html` debajo del `<app-creacionales></app-creacionales>`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
