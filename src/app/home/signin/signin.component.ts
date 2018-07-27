import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform/platform-detector.service';

@Component({
    templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {
    public loginForm: FormGroup;
    @ViewChild('userNameInput')
    public userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: [
                '',
                Validators.required,
            ],
            password: [
                '',
                Validators.required
            ],
        });
        // tslint:disable-next-line:no-unused-expression
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }

    async login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        try {
            await this.authService.authenticate(userName, password);
        } catch (err) {
            console.log(err);
            // tslint:disable-next-line:no-unused-expression
            this.platformDetectorService.isPlatformBrowser() &&
                this.userNameInput.nativeElement.focus();
            alert('Invalid user name or password!');
            return this.loginForm.reset();
        }

        this.router.navigate(['user', userName]);
    }
}
