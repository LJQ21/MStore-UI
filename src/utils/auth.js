import Cookies from 'js-cookie'

const TokenKey = 'X-Token';

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUrl(url) {
  url = url == null ? window.location.href : url;
  let qs = url.substring(url.lastIndexOf("?") + 1);
  let args = { };
  let items = qs.length > 0 ? qs.split('&') : [];
  let item = null;
  let name = null;
  let value = null;
  for(let i=0; i < items.length; i++){
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if(name.length){
      args[name] = value;
    }
  }
  return args;
}
