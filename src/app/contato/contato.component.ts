import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }
  scrollIntoView(anchorHash: string): void {
    setTimeout(() => {
        const anchor = document.getElementById(anchorHash);
        if (anchor) {
            anchor.focus();
            anchor.scrollIntoView();
        }
    });

  }
}
