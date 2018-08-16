# MyAngular Observations

1. There is only per perperty, a component has to have. templateUrl or template.
2. Communication between typescript code and template is called data binding.
    * Typescript code to template is output data. Which can be done through string interpolation {{data}} or property binding ([property]="data").
    * template to Typescript data binding is done through event binding. ( (event) = "expression" )
    * two way binding done thorugh ([(ngModel)] = "data")
3. By wrapping any html attribute of any component with square brackets, you can bind properties defined in component class.
4. All javascript events like "onClick" are valid for angular application. But they have to be used by "on" prefix. 
5. ngOnInit lifecycle hook get Called after the constructor, initializing input properties, and the first call to ngOnChanges.
6. ngOnChanges lifecycle hook get Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here which is performance intense.
7. ngDoCheck lifecycle hook get Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check. make sure, you are not doing in performance intensive jobs in this hook. Because that hook get called by so many functions of angular.
8. ngAfterContentInit lifecycle hook get Called after ngOnInit when the component's or directive's content has been initialized. It is only called when new content get injected in your html content. And if you are changing existing content. it won't get updated. 
9. ngAfterContentChecked lifecycle hook get Called after every check of the component's or directive's content.
10. ngAfterViewInit lifecycle hook get Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
11. ngOnDestroy lifecycle hook get Called once, before the instance is destroyed.
12. Attribute Directives looks like a normal HTML Attributes (possibly with data binding or event binding).
13. Attribute directives only effect/change the element they are added to.
14. Structural directives looks like a normal HTML attributes but leading with "*"
15. Structural directives affect the whole area in the DOM (elements get added or removed).
16. We can not put more than one structure directive in HTML element. It has to be one. So you can not put *ngFor and *ngIf together. 
17. structural directive with "*" is simply a fancy way to differenciate structural and attribute directives. you can use *ngFor to [ngFor] and *ngIf to [ngIf]. but you also need to use ng-template component provided by angular.
18. Instances of the services are available from the parent component to the child component but not from child component to parent component. They work as one way up to down hierarchical injectors.
19. To make the service instance common for the entire Module. you can provide it through app module provider.
20. When you create your own subscriptions based on Observables. it is highly recommended to destroy them usind "ngOnDestroy" lifecycle hook. 
21. Make sure to put redirectTo route at the end of all routes covering all routes. Order is really important.
22. By default, Angular matches paths by prefix. That means, that the following route will match both /recipes  and just / 
```javascript
{ path: '', redirectTo: '/somewhere-else' } 
```
Actually, Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS redirect you! Why?

Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with ''  (Important: That's no whitespace, it's simply "nothing").

To fix this behavior, you need to change the matching strategy to "full" :

```javascript
{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 
```
Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example).
23. subject in rxjs does work like angular Event Emitter. We should even use Rxjs Subject instead of EventEmitter for cross component communication.
24.