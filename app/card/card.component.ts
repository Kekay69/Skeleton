import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    //template: '<h1>Skeleton Project</h1>' // this is a string inline
   templateUrl: 'card.component.html', // external template
   styleUrls: [ 'card.component.css' ] // style it's in an array
})
export class CardComponent {
    @Input() task: Task; // --- property 
  }