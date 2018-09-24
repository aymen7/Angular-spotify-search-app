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
    this.auth = 'Bearer BQC-W41s_AbYN8vDh8TbeZaPo4T7QGPq_xXm023MvcW93MAZDS1-lpA1HmZUUostMGVErH77VYTpD8CM-SylfOjii4goSKDaZKRiulDgkhYy0GuIomvC1owc3NUrISiUdKV-wnNpjvpw6TMnQfv8X-s6RdbnETW0J9y6soSlEdRdkA';
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

