import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byCity',
  pure: false
})
export class ByCityPipe implements PipeTransform {

  transform(tutors: any[], city: string): any[] {
    if(!tutors) return [];
    if(!city) return tutors;
    
    city = city.toLowerCase();
    
    return tutors.filter( tutor => {
      return tutor.city.toLowerCase().includes(city);
    });
   } 

}
