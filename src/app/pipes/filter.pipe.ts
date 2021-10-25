import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

   transform(value: any[], filteredString: string) {
    // console.log(value.length)
    if(!value) return null;
    if(!filteredString) return value;
    
    
    filteredString = filteredString.toLowerCase();
    return value.filter((data)=>{
      return JSON.stringify(data).toLowerCase().includes(filteredString)
    })
    
  }

}
