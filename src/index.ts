import { NgModule } from '@angular/core';


import { NgCapitalizeModule } from './pipes';


@NgModule({
	exports:[
		NgCapitalizeModule
	]
})
export class NgPipeModule{};


export * from './pipes';
