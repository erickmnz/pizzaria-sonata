import { useApp, useStore, userRoutes, dashboardRoutes, defineOptions, WMain } from 'waltz-ui'
import waltzPtbr from '@waltz-ui/i18n-ptbr'
import '../static/main.css'
import '@waltz-ui/ui/style.css'
import 'waltz-tailwind-layout/style.css'

const options = defineOptions({
    routes: [
        userRoutes(() => import('./pages/_auth-wall.vue')),
        dashboardRoutes(() => import('./pages/dashboard.vue')),
      ],
    i18n: {
        locale: 'pt_BR',
        messages: {
          pt_BR: waltzPtbr
        }
    },
    component:WMain,
    menuSchema:{
        start:{
            meta:{
                title:"inicio",
                icon:"home"
            },
            children:[
                "/dashboard/pizza",
                "/dashboard/user",
            ]
        }
    }
})
useApp(options).then(({ mount }) => {
    mount()
  })