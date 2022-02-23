
export function handleMenuListToRoutes() {
  const menuList = JSON.parse(localStorage.getItem('menuList'));
  function transformTree(array) {
    return array.map(item => {
      if (item.children) {
        return {
          path: item.url,
          meta: {
            title: item.resourceName,
          },
          children: transformTree(item.children)
        }
      } else {
        return {
          path: item.url,
          meta: {
            title: item.resourceName,
          },
          component: () => import(item.resourceUrl)
        }
      }
    })
  }
  return transformTree(menuList);
}
