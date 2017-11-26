import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() {
    return this.auth.user$
      .map(user => {
        console.log(user);
        if (user) {
          const { uid } = user;
          const appUser = this.userService.get(uid);
          console.log(appUser);
          return false;
        }
        return false;
      })
  }

}
