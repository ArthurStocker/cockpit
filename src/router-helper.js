export function getRouterPath (route, parent) {
  console.log('>route< ', route)
  console.log('>parent< ', parent)
  route.destination.path = (route.destination.path.lastIndexOf('/') !== 0 ? parent.path + route.destination.path.replace('//', '/') : route.destination.path)
  if (route.children) {
    route.destination.props = { routes: [] }
    route.destination.children = []
    for (var c = 0; c < route.children.length; c++) {
      route.destination.children.push(getRouterPath(route.children[c], route.destination))
      route.destination.props.routes.push(route.children[c])
    }
  }
  return route.destination
}
