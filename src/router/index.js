import Vue from 'vue'
import Router from 'vue-router'
//会员管理
import Member from '../components/Member-lkq.vue'
import AddMember from '../components/AddMember-lkq.vue'
import UpdateMember from '../components/UpdateMember-lkq.vue'
//渠道商管理
import AddDistri from '../components/AddDistributor-lkq.vue'
import UpdateDistri from '../components/UpdateDistributor-lkq'
import MemberInfo from '../components/MemberInfo-lkq'
//主页/登录注册/角色管理
import Index  from '../components/Index'
import Login from  '../components/Login-lht'
import Role from  '../components/Role-lht'
import Register from '../components/Register-lht'
//门店/仓库配置
import Shopll from '../components/Shop-ll.vue'
import AddShop from '../components/AddShop-ll.vue'
import WareHouse from '../components/WareHouse-ll.vue'
import UpdateShop from '../components/UpdateShop-ll.vue'
import UpdateWareHouse from '../components/UpdateWareHouse-ll.vue'
import AddWareHouse from '../components/AddWareHouse-ll.vue'
//商品配置
import Commodity from "../components/Commodity category_xrq"
import Commodity2 from "../components/Commodity category02_xrq"
import BrandManage  from "../components/Brand management _xrq"
import BrandManage2 from "../components/Brand management02_xrq"
import SmallCommodity from "../components/Small commodity_xrq"
import SmallCommodity2 from "../components/Small commodity02_xrq"
import SmallCommodity3 from "../components/Small commodity03_xrq"
//商品属性
import AttrParamTableZG from "../components/AttrParamTableZG";
import AttrTableZG from "../components/AttrTableZG";
import AttributesZG from "../components/AttributesZG";
import UpdateParamZG from "../components/UpdateParamZG";
import UpdateAttrZG from "../components/UpdateAttrZG";
//评估鉴定
import AppraisalZG from "../components/AppraisalZG";
import ApprTableZG from "../components/ApprTableZG";
import UpdateApprZG from "../components/UpdateApprZG";



Vue.use(Router)

//路由导航守卫


export default new Router({
  mode: 'history',
  routes:[
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path:"/index",
      component:Index,
      children:[
        //角色管理
        {
          path: "role",
          component: Role
        },
        //注册
        {
          path: "register",
          component: Register
        },
        //门店配置
        {
          path:"shop",
          component:Shopll,
        },
        {
          path: "updateShop",
          component: UpdateShop
        },
        {
          path:"addShop",
          component: AddShop
        },
        //仓库配置
        {
          path:"wareHouse",
          component: WareHouse
        },
        {
          path:"updateWareHouse",
          component: UpdateWareHouse
        },
        {
          path:"addWareHouse",
          component: AddWareHouse
        },
        //商品配置
        //商品大类
        {
          path: "commodity",
          component: Commodity
        },
        {
          path: "commodity2",
          component: Commodity2
        },
        //商品小类
        {
          path:"smallCommodity",
          component: SmallCommodity
        },
        {
          path: "smallCommodity2",
          component: SmallCommodity2
        },
        {
          path: "smallCommodity3",
          component: SmallCommodity3
        },
        //品牌管理
        {
          path: "brandManage",
          component:BrandManage
        },
        {
          path: "brandManage2",
          component: BrandManage2
        },
        //商品属性
        {
          path: 'attr',
          component: AttributesZG,
          children:[
          {
            path:"attrTable",
            component: AttrTableZG
          },
          {
          path:"updateAttr",
          component: UpdateAttrZG
          },
          {
          path:"paramTable",
          component: AttrParamTableZG
          },
          {
          path:"updateParam",
          component: UpdateParamZG
          }
          ]
        },
        //评估鉴定
        {
          path: "appr",
          component: AppraisalZG,
          children: [
            {
              path: "apprTable",
              component: ApprTableZG
            },
            {
              path: "updateAppr",
              component: UpdateApprZG
            }
          ]
        },
        //会员管理
        {
          path: "member",
          component: Member
        },
        {
          path: "addMember",
          component: AddMember
        },
        {
          path: "updateMember",
          component: UpdateMember
        },
        //渠道商管理
        {
          path: "addDistri",
          component: AddDistri
        },
        {
          path: "updateDistri",
          component: UpdateDistri
        },
        {
          path: "memberInfo",
          component: MemberInfo
        }
      ]
    }
  ]
})

