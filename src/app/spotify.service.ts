import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // the base url for all of the APIs end Points
  static  BASE_URL = 'https://api.spotify.com/v1';
  private auth: string;
  constructor(private _http: HttpClient ) {
    this.auth = 'Bearer BQAp2G4dr7sOmqlIXZ_XaBIaMs7TojkIEcWj8Oi1dN6yex1wlRyNqMQTScxXun85AqNOp_mMIBlEs7ch7UEEtWblEOrZJwzzXTyDD2_WaNxAFE_6JLtrIbMqO8ohjDwkbGAm3RNz1WtVtoyg6XV-3xdQTgvMcVhoX2Ed4ff9GQ';
   }
   query(url: string, params: string[]): Observable<any[]> {
         /*
          this method will take the url (ex: '/search',....) and
          params array (q,type,limit ......) and concatenate all of theme in one var called url_query to use in
          the _http.get(url_query)
          */
      let url_query: string;
      url_query = SpotifyService.BASE_URL + url + '?' + params.join('&');
      // use HttpHeaders().set() to pass the request headers(content-type, Authorization, Accept)
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.auth)
      .set('Accept', 'application/json');
      return this._http.get<any[]>(url_query, {headers});
   }
  search(query: string, type: string): Observable<any> {
    return this.query('/search', [
      'q=' + query,
      'type=' + type
    ]);
  }

}

