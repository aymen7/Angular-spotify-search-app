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
    this.auth = 'Bearer BQAeL4CocXTgnBNaPzB9XEldt41_pEm1upCRdAx1HGNIl_u2Q-J5Ii1_vgHK5u2_sadfuKobbuAk1vzb2QiJ2I0fbnAZ9IyGWALA0Fc4GT7UbhtVkrfiEBSplBhPtbpweDbN-EttRIk3R18ZQlt4pTPqUh8KfKEeitvA1Y13gYsO';
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

