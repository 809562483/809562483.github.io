import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CrisisDetailResolverService } from '../auth/crisis-detail-resolver.service';
import { ComposeMessageComponent } from '../compose-message/compose-message.component';
import { RouteComponent } from '../route/route.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crises-list.component';
const routes: Routes = [
  // {path:"route",component:RouteComponent,children:[
  {
    path: "", component: CrisisCenterComponent, children: [
      {
        path: "", component: CrisisListComponent, data: { animation: "CrisisList" },
        children: [
          {
            path: ":id", component: CrisisDetailComponent, canDeactivate: [AuthGuard], resolve: {
              realCrisis: CrisisDetailResolverService
            }
          },
          { path: "", component: CrisisCenterHomeComponent },

        ]
      },

    ]
  },

  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
