import http from '@/api/http'

export function loginByUsername(args = {}, loading = false) {
  return http.post("/api/login",args,loading);
}

export function apiLogout() {
  return http.post("/api/logout");
}

export function getMenuInfo(args = {}, loading = false) {
  return http.get("/api/getMenu",args,loading)
}

