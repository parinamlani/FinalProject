import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { Empleave } from './empleave';


@Component({
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']

})
export class EmpleaveEditComponent implements OnInit {
  pageTitle = 'Apply Leave';
  errorMessage: string;

  empleave: Empleave;

  constructor(private empleaveService: EmpleaveService,
              private route : ActivatedRoute,
              private router : Router) { }
              ngOnInit():void {
                this.route.paramMap.subscribe(
                  params => {
                    const id = +params.get('id');
                    this.getEmpleave(id);
                  }
                  );
              }


  getEmpleave(id: number): void {
    this.empleaveService.getEmpleave(id).subscribe(
     (empleave : Empleave) => this.onEmpleaveRetrieved(empleave),
      (error : any) => this.errorMessage =<any>error
    );
  }

  onEmpleaveRetrieved(empleave: Empleave): void {
    this.empleave = empleave;

    if (!this.empleave) {
      this.pageTitle = 'No leave List found';
    } else {
      if (this.empleave.id === 0) {
        this.pageTitle = 'Add list';

      }
    }
  }



  saveEmpleave(): void {
    if (true === true) {
      if (this.empleave.id === 0) {
        this.empleaveService.createEmpleave(this.empleave).subscribe({
          next: () => this.onSaveComplete(`The new ${this.empleave.leavetype} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {

    // Navigate back to the Leave list
    this.router.navigate(['/empleaves']);
  }
}
