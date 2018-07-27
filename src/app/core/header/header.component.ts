import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    public user$: Observable<User>;

    constructor(
        private userService: UserService,
        private router: Router) {
        this.user$ = userService.ObservableUser;
    }

    public logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
