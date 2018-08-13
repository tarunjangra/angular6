import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  selector: 'gi-header'
})

export class HeaderComponent {

  @Output() selection: EventEmitter<string> = new EventEmitter();

  onSelect(nav: string){
    this.selection.emit(nav);
  }
  
}