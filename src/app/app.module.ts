import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

function httpLoaderFactoryFn(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}
function httpApiLoaderFactoryFn(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "https://www.google.com/api/teanslation/", "");
}

let directoryLoader = {
  provide: TranslateLoader,
  useFactory: httpLoaderFactoryFn,
  deps: [HttpClient],
}

let apiLoader = {
  provide: TranslateLoader,
  useFactory: httpApiLoaderFactoryFn,
  deps: [HttpClient],
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: directoryLoader,
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
