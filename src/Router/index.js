import Home from './../zujian/home';
import Banner from './../zujian/banner'
import News from './../zujian/news'
import Variety from './../zujian/variety'
import Staff from './../zujian/staff'

let routes =[
    {path:'/',component:Home,exact:true},
    {path:'/banner',component:Banner,exact:true},
    {path:'/news',component:News,exact:true},
    {path:'/variety',component:Variety,exact:true},
    {path:'/staff',component:Staff,exact:true},
]

export default routes;