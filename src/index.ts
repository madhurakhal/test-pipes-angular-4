import { NgModule } from '@angular/core';


import { NgCapitalizeModule } from './pipes';
import { NgJptServices } from './services';


@NgModule({
	exports:[
		NgCapitalizeModule,
    NgJptServices
	]
})
export class NgPipeModule{};


export * from './pipes';
export * from './services';
