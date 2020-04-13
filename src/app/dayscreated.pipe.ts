import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayscreated'
})
export class DayscreatedPipe implements PipeTransform {

  transform(value: any): any {
    let firstDate: Date = new Date(value)
    let firstDateWithNoTime:any  = new Date(firstDate.getFullYear(),firstDate.getMonth(),firstDate.getDate());
    let currentDate: Date = new Date();
    let todayWithNoTime:any = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate())
    let timeDifferenceSeconds = Math.round(Math.abs((todayWithNoTime - firstDateWithNoTime)/ 1000));
    let days = Math.round(Math.abs((timeDifferenceSeconds) / 86400))
    let weeks = Math.round(Math.abs((days) / 7))
    let months =Math.round(Math.abs((weeks) / 4))
    let years = Math.round(Math.abs((months) / 12))

    if(days < 7){
      return "a few days ago"
    }

    else if(days>7 && weeks<4){
      return "a few weeks ago"
    }
    else if(weeks > 4 && months < 12){
      return "about " + months + " months ago"
    }
    else if(months > 12){
      return "about " +years+ " years ago"
    }
  }

}
