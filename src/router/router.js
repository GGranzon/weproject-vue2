//使用router.beforeEach 注册一个全局前置守卫,判断用户是否登录
import router from "./index";

router.beforeEach((to, from, next) => {
  //debugger
  if(to.path === '/login'){
    next()
  }else {
    let token = sessionStorage.getItem('Authorization');
    if(!token){
      next('/login')
    }else {
      next()
    }
  }
})
export default router
