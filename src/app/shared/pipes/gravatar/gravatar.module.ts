import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravatarPipe } from './gravatar.pipe';
import { Md5Service } from '@shared/services/md5.service';

@NgModule({
  imports: [CommonModule],
  declarations: [GravatarPipe],
  providers: [Md5Service]
})
export class GravatarModule {}
