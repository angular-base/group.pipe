import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform (items: any, query?: string): any {
    let groupValue = '';
    let newItems = [];

    if (isUndefined(query)) {
      return items;
    }

    return items.reduce((map, item) => {
      if (groupValue !== item[query]) {
        newItems.push({
          name: item[query],
          group: [item]
        });
        groupValue = item[query];
      } else {
        newItems[newItems.length - 1].group.push(item);
      }
      return newItems;
    }, []);
  }

}
