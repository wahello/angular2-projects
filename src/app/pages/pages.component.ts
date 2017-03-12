import { Component, OnInit } from '@angular/core';

import { SeAsideService } from '../components/se-aside/se-aside.service';
import { PAGES_MENU } from './pages.menu';

@Component({
    selector: 'pages',
    styles  : [require('./pages.css')],
    template: `
        <section>
            <router-outlet></router-outlet>
        </section>
    `
})
export class PagesComponent implements OnInit {

    constructor(private _asideService: SeAsideService) {
    }

    ngOnInit() {
        setTimeout(() => { this._asideService.updateMenuBar(PAGES_MENU); }, 0);
    }
}