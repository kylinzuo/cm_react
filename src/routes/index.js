import App from 'src/page/index'
import IndexComponent from 'src/page/index/index.component'
import HomeComponent from 'src/page/home/home.component'
import SpecialComponent from 'src/page/special/special.component'
import MeComponent from 'src/page/me/me.component'
import NotFoundComponent from 'src/page/not-found/not-found.component'

const routes = [
  {
    component: App,
    routes: [
      { path: '',
        exact: true,
        component: IndexComponent,
        routes: [
          {
            path: '/special',
            component: SpecialComponent
          },
          {
            path: '/me',
            component: MeComponent
          },
          {
            path: '/',
            component: HomeComponent
          }
        ]
      },
      // { path: '/special',
      //   exact: true,
      //   component: IndexComponent,
      //   routes: [
      //     {
      //       path: '',
      //       component: SpecialComponent
      //     }
      //   ]
      // },
      // { path: '/me',
      //   exact: true,
      //   component: IndexComponent,
      //   routes: [
      //     {
      //       path: '',
      //       component: MeComponent
      //     }
      //   ]
      // },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
]

export default routes
