import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lang-list',
  templateUrl: './lang-list.component.html',
  styleUrls: ['./lang-list.component.scss']
})
export class LangListComponent implements OnInit {
  @Input() handler: CFUIEventHandler;
  @Input() langTable: CFLangTableItem[];
  @Input() language: string;
  constructor() { }

  ngOnInit(): void {
  }
  handleLangChange(id: string): void {
    const { handler, langTable } = this;
    const item = langTable.find(temp => temp.id === id);
    handler.handleLangChange(item);
  }
}
