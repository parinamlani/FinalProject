import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {Leave} from './leave';
import{LeaveService} from '../leave.service'
@Component({
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
  pageTitle = 'Leave List';
errorMessage='';

_listFilter = '';
get listFilter(): string {
  return this._listFilter;
}

set listFilter(value: string) {
  this._listFilter = value;
  this.filteredLeaves = this.listFilter ? this.performFilter(this.listFilter) : this.leaves;
}

filteredLeaves: Leave[] = [];
leaves: Leave[] = [];

  constructor(private leaveService: LeaveService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';

    this.leaveService.getLeaves().subscribe({
      next: leaves => {
        this.leaves = this.leaves;
        this.filteredLeaves = this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(filterBy: string): Leave[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.leaves.filter((leave: Leave) =>
      leave.leavename.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
