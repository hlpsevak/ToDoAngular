import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTask'
})
export class SearchTaskPipe implements PipeTransform {

  transform(tasks: any[], searchString: string): any {
    return tasks.filter((task) => task.taskDesc.toLowerCase().includes(searchString.toLowerCase()));
  }

}
