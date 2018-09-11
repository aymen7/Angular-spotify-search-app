import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// here we configure our routes
//#region
/*
  * the empty path will redirect to the home path with pathMatch set to full.
  * we have two simple routes one with the 'home' as a path and the second with 'album' as path and 'id' as param.
  * finally the wildcard route which will default to the PageNotFoundComponent.
*/
//#endregion
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'album/:id', component: AlbumDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
