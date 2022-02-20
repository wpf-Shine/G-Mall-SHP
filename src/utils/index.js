import { v4 as uuidv4 } from 'uuid'
//生成游客身份的uuid
export function getUUID () {
  let uuid_token = localStorage.getItem('UUID_TOKEN')
  if (!uuid_token) {
    uuid_token = uuidv4()
    localStorage.setItem('UUID_TOKEN', uuid_token)
  }
  return uuid_token
}