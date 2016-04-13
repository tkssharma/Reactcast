# Angular JS  starter application #

"Angular 2.0 starter application "Hello world" 

## create component and bootstrap it##

Create component 
```
import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: '<h1>Hello world</h1>'
})
export class AppComponent { }
```

## import component and bootstrap it ##
```
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
bootstrap(AppComponent);
```

## Render component in index.html ##

```
      System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/boot')
            .then(null, console.error.bind(console));
    ```
  ```
    <my-app>Loading...</my-app>
  ```
