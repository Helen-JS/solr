import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  private static YEAR_MS: number = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
  private static MAPPER: {single:string, many:string, div: number}[] = [
    { single: 'a year ago', many: 'years', div: 1 },
    { single: 'a month ago', many: 'months', div: 12 },
    { single: 'a week ago', many: 'weeks', div: 4 },
    { single: 'a day ago', many: 'days', div: 7 },
    { single: 'an hour ago', many: 'hours', div: 24 },
    { single: 'a minute ago', many: 'minutes', div: 60 },
    ]
  transform(value: number): string {
    if (!value) {
      return 'Invalid start time';
    }

    for (let i: number = 0, l = TimeAgoPipe.MAPPER.length,  div: number = TimeAgoPipe.YEAR_MS; i < l; ++i) {
      let elm = TimeAgoPipe.MAPPER[i];
      let unit: number = Math.floor(value / (div /= elm.div));

      if (unit >= 1) {
        return unit === 1 ? elm.single : `${unit} ${elm.many} ago`;
      }
    }

    return 'less than a minute';
  }

}
