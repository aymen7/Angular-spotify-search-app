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
    this.auth = 'Bearer BQAFu53_D2kaketMCw830KWT8uYtthrbAe-uPgPCHxSGSSIzG3nMuL_uTuIpvGRV9gKiaoGx9cChu-7fo_XP89KJcMGfbKFmsay3qFWRENTQaH-4_bjuKIKWjRwCGqQJ3D1ufNnr2uoplny6A5ecGAwGR1iNQ4tCiDVSG7ojwy9GVA';
   }
  /*
    * this method will take the url (ex: '/search',....) and
    * params array (q,type,limit ......) and concatenate all of theme in one var called 'url_query' to use in
    * the _http.get(url_query)
    * the 'url_query' will be set according to the 'operation_type' var (we use diferent url to different types
    * of requests)
  */

query(url: string, params: string[], methodCalling: string): Observable<any[]> {
  /*
   this method will take the url (ex: '/search',....) and
   params array (q,type,limit ......) and concatenate all of theme in one var called url_query to use in
   the _http.get(url_query)
   the var url_query will be initialize according to the 'methodCalling' var .
   */
let url_query: string;
switch (methodCalling) {
  case 'search': {
    url_query = SpotifyService.BASE_URL + url + '?' + params.join('&');
    break;
 }
 case 'getAlbum': {
  url_query = SpotifyService.BASE_URL + url + '/' + params[0];
  break;
 }
 default: {
  url_query = SpotifyService.BASE_URL + url;
    break;
 }
}
// use HttpHeaders().set() to pass the request headers(content-type, Authorization, Accept)
const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.auth)
.set('Accept', 'application/json');
return this._http.get<any[]>(url_query, {headers});
}
search(query: string, type: string): Observable<any> {
return this.query('/search', [
'q=' + query,
'type=' + type
],
'search');
}
getAlbum(id: string): Observable<any> {
    return this.query('/albums',
    [id],
    'getAlbum');
}

}

