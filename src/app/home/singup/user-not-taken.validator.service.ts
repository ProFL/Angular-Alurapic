import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignUpService } from './signup.service';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {
    constructor(private singUpService: SignUpService) {}

    public checkUserNameTaken(): (control: AbstractControl) => any {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.singUpService.checkUserNameTaken(userName)
                ))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(first());
        };
    }
}
