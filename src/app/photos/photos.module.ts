import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoService } from './photo/photo.service';

@NgModule({
    declarations: [
        PhotoComponent,
    ],
    exports: [
        PhotoComponent,
    ],
    imports: [
        HttpClientModule,
    ],
    providers: [
        PhotoService,
    ]
})
export class PhotosModule { }
