import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoService } from './photo/photo.service';

@NgModule({
    imports: [
        PhotoFormModule,
        PhotoListModule,
        PhotoModule,
    ],
    providers: [
        PhotoService,
    ]
})
export class PhotosModule { }
