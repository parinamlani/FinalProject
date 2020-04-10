import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { Leave } from '../../leave-list/leave';
import { LeaveService } from '../../leave.service';


@Component({
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.css']
})
export class LeaveEditComponent implements OnInit {
  pageTitle = 'leave Edit';
  errorMessage: string;

  leave: Leave;

  constructor(private leaveService: LeaveService,
              private route : ActivatedRoute,
              private router : Router) { }
              ngOnInit():void {
                this.route.paramMap.subscribe(
                  params => {
                    const id = +params.get('id');
                    this.getLeave(id);
                  }
                  );
              }

  getLeave(id: number): void {
    this.leaveService.getLeave(id).subscribe(
     (leave : Leave) => this.onLeaveRetrieved(leave),
      (error : any) => this.errorMessage =<any>error
    );
  }

  onLeaveRetrieved(leave: Leave): void {
    this.leave = leave;

    if (!this.leave) {
      this.pageTitle = 'No Leave found';
    } else {
      if (this.leave.id === 0) {
        this.pageTitle = 'Add Leave';
      } else {
        this.pageTitle = `Edit Leave: ${this.leave.leavename}`;
      }
    }
  }

  deleteLeave(): void {
    if (this.leave.id === 0) {
      this.onSaveComplete(`${this.leave.leavename} was deleted`);
    } else {
      if (confirm(`Really delete leave: ${this.leave.leavename}?`)) {
        this.leaveService.deleteLeave(this.leave.id).subscribe({
          next: () => this.onSaveComplete(`${this.leave.leavename} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  saveLeave(): void {
    if (true === true) {
      if (this.leave.id === 0) {
        this.leaveService.createLeave(this.leave).subscribe({
          next: () => this.onSaveComplete(`The new ${this.leave.leavename} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.leaveService.updateLeave(this.leave).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.leave.leavename} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {

    // Navigate back to the employee list
    this.router.navigate(['/leaves']);
  }
}
