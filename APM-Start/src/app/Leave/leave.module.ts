import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { LeaveListComponent } from '../Leave/leave-list/leave-list.component';
import { LeaveEditComponent } from '../Leave/leave-edit/leave-edit-info/leave-edit.component';
import{SharedModule} from '../shared/shared.module';
;

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
{path:'leaves',component:LeaveListComponent},
{path : 'leaves/:id/edit',component:LeaveEditComponent}
    ])
  ],
  declarations: [
    LeaveListComponent,
    LeaveEditComponent
  ]
})
export class LeaveModule { }
