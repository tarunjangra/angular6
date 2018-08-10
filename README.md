# MyAngular Observations

1. There is only per perperty, a component has to have. templateUrl or template.
2. Communication between typescript code and template is called data binding.
  1. Typescript code to template is output data. Which can be done through string interpolation {{data}} or property binding ([property]="data").
  2. template to Typescript data binding is done through event binding. ( (event) = "expression" )
  3. two way binding done thorugh ([(ngModel)] = "data")
3. By wrapping any html attribute of any component with square brackets, you can bind properties defined in component class.

