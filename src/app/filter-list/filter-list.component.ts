import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Input() PostData: object;
  @Output() newItemEvent = new EventEmitter<string>();
  filterlist: string[];
  selectedFilter = 'All';

  onSelect(link: string) {
    this.selectedFilter = link;
    this.newItemEvent.emit(link);
  }

  constructor() {
  }

  ngOnInit(): void {

  }



}
