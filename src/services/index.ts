import { NgModule } from '@angular/core';

import { JptServices } from './jpt.services';


@NgModule({
  declarations:[
    JptServices
  ],
  exports: [
    JptServices
  ]
})
export class NgJptServices {}
export * from './jpt.services';