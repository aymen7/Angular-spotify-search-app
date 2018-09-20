# Ng-Spotify Search App
this is *Spotify Search App* was created using *Angular 6* and it uses the the *Spotify API* to fetch real time data right from *Spotify*.<br>
The *main* purpose of the app is to serve as a tutorial to some beginner/intermediate *Angular* concepts, the likes of:
* HttpClientModule and use it to communicate with the *Spotify API*.
* Angular Routing (redirection, wildCard, passing data ....).
* *Services* and *dependency injection*. 
* _Reactive forms_ (Form Builder, form controls validation ....).
* How to use the *BrowserAnimationsModule* along with the [ng-animate](https://github.com/jiayihu/ng-animate) module to create beautiful flexible animations. 
* Angular's built in *directives* (NgIf, NgFor .....) and custom pipes.
* Data flow (*Inputs and Outputs*).
# demo
![preview image gif](./src/assets/images/gifs/app-preview.gif)
# Install
After cloning this directory `cd` into it and run:<br>
`npm install` to install.<br>
`npm start` to start the project.<br>
Ps: make sure to generate your own *OAuth Token* from the [Spotify for developers WebSite](https://developer.spotify.com/)
and initialize with it the `auth var` in the `spotify.service.ts` constructor.
# Credit 
* [ngx-pagination](https://github.com/michaelbromley/ngx-pagination).
* [ng-animate](https://github.com/jiayihu/ng-animate).
* [404 page](https://codepen.io/saransh/pen/aezht).
