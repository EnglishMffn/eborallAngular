import { Pipe, PipeTransform } from '@angular/core';

// A pipe for filtering projects on the project page
@Pipe({
  name: 'projectfilter'
})
export class ProjectfilterPipe implements PipeTransform {

  transform(value: any[], filterString: string): any[] {
      const resultArray = [];

      if (!filterString) {
        return value;
      }

      for (const item of value) {
        // Check for fields
        if (item.fields.typeOfWork) {
          // Filter Fields
          if (item.fields.typeOfWork.includes(filterString)) {
            resultArray.push(item);
          }
        }
      }
      return resultArray;
    }
}
