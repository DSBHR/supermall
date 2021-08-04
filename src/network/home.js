import {request} from "./http";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
