import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-localization';
  langCode: string = 'ar';
  isLangLoaded = false;
  languages: any[] = [];
  currentLangCode = 'ar';
  lang: any;
  constructor(private translateService: TranslateService) {
  }
  ngOnInit(): void {
    this.initializeLanguages();
    this.onLangSelected(this.currentLangCode);
  }
  initializeLanguages(): void {
    this.languages = [
      {code: 'en', dir: 'ltr', name: this.translateService.instant('languages.english')},
      {code: 'ar', dir: 'rtl', name: this.translateService.instant('languages.arabic')},
    ]
  }
  onLangSelected(langCode: string): void {
    this.currentLangCode = langCode;
    this.lang = this.languages.find(l => l.code === this.currentLangCode);
    this.translateService.setDefaultLang(this.lang.code);
    this.translateService.use(this.lang.code);
  }

}


/*//! camelCase: Vars, functions, object, properties,
  //! PascalCase: Classes, Interfaces, Enums,
  //! snake_case: const, translations, key
  //! kabab-case: css, files, folders name, website-logo*/
/* languages: any[] = [
    {code: 'en', dir: 'ltr', name: 'english'},
    {code: 'ar', dir: 'rtl', name: 'arabic'},
  ] */
