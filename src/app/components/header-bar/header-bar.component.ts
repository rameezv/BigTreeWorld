import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  private inverted = true;
  @Input() invertPosition = 0;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.inverted = window.pageYOffset === this.invertPosition;
    });
  }

  get invertHeader() {
    return this.inverted;
  }

}
