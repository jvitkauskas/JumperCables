import {Component, Input} from '@angular/core';
import {Dictionary} from '../../providers/dictionary/dictionary';

@Component({
    selector: 'langselector',
    styleUrls: ['./lang.selector.component.scss'],
    templateUrl: './lang.selector.component.html'
})
export class LangSelectorComponent {
    languages: Array<string>;
    activelang: string;

    constructor(private dictionary: Dictionary) {
        this.languages = dictionary.getAvailableLanguages();
        this.activelang = dictionary.getActiveLanguage();
    }

    changeLang(lang: string) {
        if (lang != this.activelang) {
            this.dictionary.setLanguage(lang);
            location.reload();
        }
    }
}  