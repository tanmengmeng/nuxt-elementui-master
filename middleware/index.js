export default function ({ store, error,route }) {
  if (!store.state.authUser) {
    error({
      message: '请先登录',
      statusCode: 403
    })
  }
  else if(!!store.state.menuList){
  	var bol = false;
    if(route.path=="/"||!route.path){
      bol = true
    }
    else{
      bol = compareMenu(store.state.menuList,route.path)
    }
  	if(!bol){
  		error({
	      message: '您没有访问权限',
	      statusCode: 401
	    })
  	}
  }
}
export function compareMenu(menuList,path){
  var bol = false;
  for(var i=0;i<menuList.length;i++){
    if(menuList[i].path==path){
      bol= true;
    }
    else if(!!menuList[i].children){
        bol = compareMenu(menuList[i].children,path,bol);
      }
      if(bol){break;}
    }
  return bol;
}
