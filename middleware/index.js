export default function ({ store, error,route }) {
  if (!store.state.authUser) {
    error({
      message: '请先登录',
      statusCode: 403
    })
  }
  // else if(!!store.state.menuList){
  // 	var bol = false;
  //   if(route.path=="/"||!route.path){
  //     bol = true
  //   }
  //   else{
  //     for(var i in store.state.menuList){
  //       if(store.state.menuList[i].path==route.path){
  //         bol= true;
  //         return;
  //       }
  //     }
  //   }
  // 	if(!bol){
  // 		error({
	//       message: '您没有访问权限',
	//       statusCode: 401
	//     })
  // 	}
  // }
}