import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform (items: any, query?: string): any {
    let groupBy = '';

    if (isUndefined(query)) {
      return items;
    }

    return items.reduce((groupedItems, item) => {
      if (groupBy !== item[query]) {
        groupedItems.push({
          name: item[query],
          group: [item]
        });
        groupBy = item[query];
      } else {
        groupedItems[groupedItems.length - 1].group.push(item);
      }
      return groupedItems;
    }, []);
  }

}
