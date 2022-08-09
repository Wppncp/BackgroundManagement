/**
 * 环境配置文件
 * 开发环境
 * 测试环境
 * 线上环境
 */
//当前环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/e7029c7eed368243bc71195172c1937a/api'
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/e7029c7eed368243bc71195172c1937a/api'
    },
    pro: {
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/e7029c7eed368243bc71195172c1937a/api'
    },
}

export default {
    env,
    //mock的总开关
    mock: true,
    ...EnvConfig[env]
}