import { noDiscoveryAuthConfig } from './../auth-no-discovery.config';
import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

import { GeralService } from '../geral.service';
import { googleAuthConfig } from '../auth.google.config';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  loginFailed: boolean = false;
  userProfile: object;

  constructor(private oauthService: OAuthService,
            private geralService: GeralService) {
      // Tweak config for implicit flow.
      // This is just needed b/c this demo uses both,
      // implicit flow as well as password flow
      this.oauthService.configure(noDiscoveryAuthConfig);
      this.oauthService.loadDiscoveryDocument();
  }

  ngOnInit() { 
     /*   
    
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
        if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
            
          console.log(this.oauthService.scope);//this.oauthService.initImplicitFlow('some-state');
        }
    });
    */

}


login() {
this.oauthService.initImplicitFlow();
// the parameter here is optional. It's passed around and can be used after logging in
}

logout() {
this.oauthService.logOut();
}

loadUserProfile(): void {
this
    .oauthService
    .loadUserProfile()
    .then(up => this.userProfile = up);

}

get givenName() {
var claims = this.oauthService.getIdentityClaims();
if (!claims) return null;
return claims['given_name'];
}

get familyName() {
var claims = this.oauthService.getIdentityClaims();
if (!claims) return null;
return claims['family_name'];
}

testSilentRefresh() {
/*
 * Tweak config for implicit flow.
 * This is needed b/c this sample uses both flows
*/
//this.oauthService.clientId = "spa-demo";
this.oauthService.oidc = true;

this
    .oauthService
    .silentRefresh()
    .then(info => console.debug('refresh ok', info))
    .catch(err => console.error('refresh error', err));
}

set requestAccessToken(value: boolean) {
this.oauthService.requestAccessToken = value;
localStorage.setItem('requestAccessToken', '' + value);
}

get requestAccessToken() {
return this.oauthService.requestAccessToken;
}

get id_token() {
return this.oauthService.getIdToken();
}

get access_token() {
return this.oauthService.getAccessToken();
}

get id_token_expiration() {
return this.oauthService.getIdTokenExpiration();
}

get access_token_expiration() {
return this.oauthService.getAccessTokenExpiration();
}

public teste(){
    this.geralService.AuthClient();
}

}
