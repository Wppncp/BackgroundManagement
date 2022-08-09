import Mock from 'mockjs'
import homeApi from './mockData/home'
//拦截请求
//https://www.fastmock.site/mock/e7029c7eed368243bc71195172c1937a/api/home/getTableData 位于fastmock地址
Mock.mock('/home/getData',homeApi.getHomeData)//本地mock