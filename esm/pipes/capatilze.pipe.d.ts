import { PipeTransform } from '@angular/core';
export declare function isString(value: any): value is string;
export declare function upperFirst(value: string): string;
export declare class CapitalizePipe implements PipeTransform {
    transform(input: any, all?: boolean): any;
}
