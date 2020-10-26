import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss']
})
export class FilterlistComponent implements OnInit {
  @Input() PostData: object;
  @Output() newItemEvent = new EventEmitter<string>();
  filterList: string[];
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
