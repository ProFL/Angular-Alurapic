import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from '../photo/photo.module';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        FilterByDescription,
        LoadButtonComponent,
        PhotoListComponent,
        PhotosComponent,
        SearchComponent,
    ],
    imports: [
        CardModule,
        CommonModule,
        DarkenOnHoverModule,
        PhotoModule,
    ]
})
export class PhotoListModule { }
