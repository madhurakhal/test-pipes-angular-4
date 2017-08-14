import { Injectable } from '@angular/core';


@Injectable()
export class JptServices{
  getAllInfo(): string[] {
    return ["hello", "world", "this", "is", "test"];
  }
}
