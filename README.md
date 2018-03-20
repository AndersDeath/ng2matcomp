# Ng2MatComp

Components library which can be used for development and maintenance of custom Angular components, modules, services etc.

## Directory structure

* `src > app >`
	* `components >`
		* `app >`
			* `app.component.ts`
			* `app.component.spec.ts`
			* `app.component.html`
			* `app.component.css`
		* `component_N >`
	* `modules >`
		* `custom-material >`
			* `custom-material.module.ts`
		* `module_N >`
	* `services >`
		* `event-emitter >`
			* `event-emitter.service.ts`
			* `event-emitter.service.spec.ts`
		* `service_N >`
	* `app.module.ts`
	* `app.routes.ts`

## Workflow

### Generate item

the following command will generate component files in directory `./src/components/custom-component-name/` relative to the project root, and add it to `app.module` dependencies:

```
ng generate component components/custom-component-name --module app.module
```


## General instructions

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3._

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Licenses

* [`Ng2MatComp`](LICENSE)