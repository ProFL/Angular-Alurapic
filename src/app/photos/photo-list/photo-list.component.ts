import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
    public currentPage = 1;
    public debounce: Subject<string> = new Subject<string>();
    public filter = '';
    public hasMore = true;
    public photos: Photo[] = [];
    public userName = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: PhotoService) { }

    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;
        this.photos = this.activatedRoute.snapshot.data.photos;
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    load() {
        this.photoService
            .listFromUserPagineted(this.userName, ++this.currentPage)
            .subscribe(photos => {
                this.photos = this.photos.concat(photos);
                if (!photos.length) {
                    this.hasMore = false;
                }
            });
    }
}
