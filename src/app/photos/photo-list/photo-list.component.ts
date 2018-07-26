import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
    public currentPage = 1;
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
    }

    load() {
        this.photoService
            .listFromUserPagineted(this.userName, ++this.currentPage)
            .subscribe(photos => {
                this.filter = '';
                this.photos = this.photos.concat(photos);
                if (!photos.length) {
                    this.hasMore = false;
                }
            });
    }
}
