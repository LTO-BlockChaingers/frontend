import { Pipe, PipeTransform } from '@angular/core';
import { Md5Service } from '@shared/services/md5.service';

@Pipe({
  name: 'gravatar',
  pure: true
})
export class GravatarPipe implements PipeTransform {
  constructor(private md5: Md5Service) {}

  transform(email: string, args?: any): any {
    return 'https://www.gravatar.com/avatar/' + this.md5.hash(email);
  }
}
