/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"
export const getNews = (page) => {
  const param = (page - 1)*10 + '-' + page*10
  return HTTPREQUEST.get('https://c.m.163.com/nc/article/headline/T1348647853363/'+param+'.html')
}
export const getResultData_servers = (postData) => {
  return HTTPREQUEST.post('/api/white-screen/search', postData)
}
