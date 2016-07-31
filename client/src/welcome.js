import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Welcome {

  constructor(router){
    this.router = router;
  }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')


  signin() {
    this.router.navigateToRoute('login');
  }

  canDeactivate() {

  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
