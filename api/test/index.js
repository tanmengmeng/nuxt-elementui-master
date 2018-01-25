/**
 * 
 */

import http from "../http"

/**
 * test
 */
export function test(args = {
  // ...
}, loading = true) {
  return http.post("api/test", args, loading)
}

