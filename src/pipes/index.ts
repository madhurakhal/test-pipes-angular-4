import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capatilze.pipe';

export * from './capatilze.pipe';

@NgModule({
	declarations: [
		CapitalizePipe
	],
	exports: [
		CapitalizePipe
	]
})
export class NgCapitalizeModule{ }

