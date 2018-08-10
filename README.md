# MyAngular Observations

1. There is only per perperty, a component has to have. templateUrl or template.
2. Communication between typescript code and template is called data binding.
  1. Typescript code to template is output data. Which can be done through string interpolation {{data}} or property binding ([property]="data").
  2. template to Typescript data binding is done through event binding. ( (event) = "expression" )
  3. two way binding done thorugh ([(ngModel)] = "data")
3. By wrapping any html attribute of any component with square brackets, you can bind properties defined in component class.
4. All javascript events like "onClick" are valid for angular application. But they have to be used by "on" prefix. 
5. *ngIf is the structural directive given by Angular. That can be used to put if condition in angular application. 
6. except *ngIf default structural directives there is other type of directives called attribute directives.
7. Structural directives add or remove elements in the DOM. Where as attribute directive change the element they were placed on.
8. 
