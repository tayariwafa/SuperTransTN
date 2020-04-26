import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/signup',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
     /*  {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      }, */
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      }
      //my pages SuperTrans
      ,
      {
        path: 'chauffeur',
        loadChildren: () => import('./chauffeur/chauffeur.module').then(module => module.ChauffeurModule)
      }
      ,
      {
        path: 'voyageurs',
        loadChildren: () => import('./voyageur/voyageur.module').then(module => module.VoyageurModule)
      }
      ,
      {
        path: 'statistiques',
        loadChildren: () => import('./statistiques/statistiques.module').then(module => module.StatistiquesModule)
      }
      ,
      {
        path: 'encours',
        loadChildren: () => import('./encours/encours.module').then(module => module.EncoursModule)
      }
      ,
      {
        path: 'reservation',
        loadChildren: () => import('./reservation/reservation.module').then(module => module.ReservationModule)
      }
      ,
      {
        path: 'accueil',
        loadChildren: () => import('./accueil/accueil.module').then(module => module.AccueilModule)
      }
      ,
      {
        path: 'pannes',
        loadChildren: () => import('./pannes/pannes.module').then(module => module.PannesModule)
      }
      ,
      {
        path: 'retard',
        loadChildren: () => import('./retard/retard.module').then(module => module.RetardModule)
      }
      ,
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then(module => module.ServicesModule)
      }
      ,
      {
        path: 'avisclient',
        loadChildren: () => import('./avisclient/avisclient.module').then(module => module.AvisclientModule)
      }
      ,
      {
        path: 'tunis',
        loadChildren: () => import('./chauffeur-tunis/chauffeur-tunis.module').then(module => module.ChauffeurTunisModule)
      }
      ,
      {
        path: 'sousse',
        loadChildren: () => import('./chauffeursousse/chauffeursousse.module').then(module => module.ChauffeursousseModule)
      }
      ,
      {
        path: 'mahdia',
        loadChildren: () => import('./chauffeurmahdia/chauffeurmahdia.module').then(module => module.ChauffeurmahdiaModule)
      }
      ,
      {
        path: 'gabes',
        loadChildren: () => import('./chauffeurgabes/chauffeurgabes.module').then(module => module.ChauffeurgabesModule)
      }
      ,
      {
        path: 'presencetunis',
        loadChildren: () => import('./presencetunis/presencetunis.module').then(module => module.PresencetunisModule)
      }
      ,
      {
        path: 'presencesousse',
        loadChildren: () => import('./presencesousse/presencesousse.module').then(module => module.PresencesousseModule)
      }
      ,
      {
        path: 'presencemahdia',
        loadChildren: () => import('./presencemahdia/presencemahdia.module').then(module => module.PresencemahdiaModule)
      }
      ,
      {
        path: 'presencegabes',
        loadChildren: () => import('./presencegabes/presencegabes.module').then(module => module.PresencegabesModule)
      }
      ,
      {
        path: 'notifications',
        loadChildren: () => import('./notification/notification.module').then(module => module.NotificationModule)
      }
      ,
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule)
      }
      ,
      {
        path: 'newchauffeur',
        loadChildren: () => import('./newchauffeur/newchauffeur.module').then(module => module.NewchauffeurModule)
      }
      ,
      
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
