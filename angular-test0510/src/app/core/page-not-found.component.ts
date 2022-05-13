import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="page-not-box h-100">
      <h3>找不到页面。。。</h3>
    </div>
  `,
  styles: [`
    .page-not-box{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})

export class PageNotFoundComponent implements OnInit{

    constructor(){}
    ngOnInit(): void {

    }
}
