import { Pipe, PipeTransform } from '@angular/core';

export function isString (value: any): value is string {

	return typeof value === 'string';
  }

  export function upperFirst (value: string): string {

	return value.slice(0, 1).toUpperCase() + value.slice(1);
  }
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(input: any, all: boolean = false) : any {

    if (!isString(input)) {
      return input;
    }

    if (!all) {
      return upperFirst(input.toLowerCase());
    }
    else {
      return input.toLowerCase()
        .split(' ')
        .map((value: string) => upperFirst(value))
        .join(' ');
    }
  }
}