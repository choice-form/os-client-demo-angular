import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextUtilService {

  pascalize(str: string) {
    const list = str.trim().split(/[-_]/);
    return list.reduce((rs, s) => {
      const head = s[0];
      if (head) {
        rs += head.toUpperCase() + s.substr(1);
      }
      return rs;
    }, '');
  }
}
