import App from 'src/page/index'
import IndexComponent from 'src/page/index/index.component'
import HomeComponent from 'src/page/home/home.component'

const routes = [
  {
    component: App,
    routes: [
      { path: '/',
        exact: true,
        component: IndexComponent,
        routes: [
          {
            path: 'home',
            component: HomeComponent
          }
        ]
      }
    ]
  }
]

export default routes
