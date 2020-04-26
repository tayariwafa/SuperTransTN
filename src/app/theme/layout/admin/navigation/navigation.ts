import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Nos Services ',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
    /*   {
        
        id: 'page-layouts',
        title: 'Page Layouts',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'vertical',
            title: 'Vertical',
            type: 'item',
            url: '/layout/static',
            target: true
          },
          {
            id: 'horizontal',
            title: 'Horizontal',
            type: 'item',
            url: '/layout/horizontal',
            target: true
          }
        ]
      }, */
      {
        id: 'accueil',
        title: 'Accueil',
        type: 'item',
        url: '/accueil',
        icon: 'feather icon-home',
        breadcrumbs: false
      },
      {
        id: 'notifications',
        title: 'Notifications',
        type: 'item',
        url: '/notifications',
        icon: 'feather icon-home',
        breadcrumbs: false
      },
      /* {
        id: 'chauffeur',
        title: 'Chauffeurs',
        type: 'item',
        url: '/chauffeur',
        icon: 'feather icon-server',
        breadcrumbs: false
      }, */
      {
        id: 'page-layouts',
        title: 'Listes Des Présences',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'presencetunis',
            title: 'voie Tunis',
            type: 'item',
            url: '/presencetunis',
            target: true
          },
          {
            id: 'presencesousse',
            title: 'Voie Sousse',
            type: 'item',
            url: '/presencesousse',
            target: true
          }
          ,
          {
            id: 'presencemahdia',
            title: 'Voie Mahdia',
            type: 'item',
            url: '/presencemahdia',
            target: true
          }
          ,
          {
            id: 'presencegabes',
            title: 'Voie Gabes',
            type: 'item',
            url: '/presencegabes',
            target: true
          }
        ]
      },
      
      {
        id: 'voyageurs',
        title: 'Voyageurs',
        type: 'item',
        url: '/voyageurs',
        icon: 'feather icon-server',
        breadcrumbs: false
      },
      {
        id: 'statistiques',
        title: 'Statistiques',
        type: 'item',
        url: '/statistiques',
        icon: 'feather icon-pie-chart',
        breadcrumbs: false
      },
      {
        id: 'encours',
        title: 'en cours ',
        type: 'item',
        url: '/encours',
        icon: 'feather icon-home',
        breadcrumbs: false
      },
      {
        id: 'reservation',
        title: 'Réservations',
        type: 'item',
        url: '/reservation',
        icon: 'feather icon-home',
        breadcrumbs: false
      },
     
      {
        id: 'page-layouts',
        title: 'Réclamations',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'pannes',
            title: 'Pannes',
            type: 'item',
            url: '/pannes',
            target: true
          },
          {
            id: 'retard',
            title: 'retard',
            type: 'item',
            url: '/retard',
            target: true
          }
          ,
          {
            id: 'services',
            title: 'Services',
            type: 'item',
            url: '/services',
            target: true
          }
          ,
          {
            id: 'avisclient',
            title: 'Avis Client',
            type: 'item',
            url: '/avisclient',
            target: true
          }
        ]
      },
      {
        id: 'chauffeurs-layouts',
        title: 'chauffeurs',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'tunis',
            title: 'Voie Tunis',
            type: 'item',
            url: '/tunis',
            target: true
          },
          {
            id: 'sousse',
            title: 'Voie Sousse',
            type: 'item',
            url: '/sousse',
            target: true
          }
          ,
          {
            id: 'mahdia',
            title: 'Voie Mahdia',
            type: 'item',
            url: '/mahdia',
            target: true
          }
          ,
          {
            id: 'gabes',
            title: 'Voie Gabes',
            type: 'item',
            url: '/gabes',
            target: true
          }
          ,
          {
            id: 'newchauffeur',
            title: 'Nouveau Chauffeur',
            type: 'item',
            url: '/newchauffeur',
            target: true
          }
        ]
      },
     
    ]
  },



/*   {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  } */
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
