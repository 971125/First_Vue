const Mock = require('mockjs')

// 设置mock过期时间
Mock.setup({
	timeout:500
})

const artticles = Mock.mock({
	"userInfo|15":[{    //生成|num个如下格式名字的数据
	          "id|+1":1,  //数字从当前数开始后续依次加一
	          "name":"@cname",    //名字为随机中文名字
	          "age|18-28":25,    //年龄为18-28之间的随机数字
	          "sex|1":["男","女"],    //性别是数组中的一个，随机的
	          "job|1":["web","UI","python","php"]    //工作是数组中的一个
	      }],
})
const login = Mock.mock({
	'admin':'root',
	'password':'123456'
})
const List = Mock.mock({
	'Info|10':[{
		'data':"@date('yyyy-MM-dd')",
		'info':"@cparagraph"
	}]
})
const gk = Mock.mock({
	'contents|10':[{
		'id|+1':1,
		'content':'@csentence(100)'
	}]
	
})
Mock.mock('/List',{List})
Mock.mock('/Login',{login})
Mock.mock('/gk',{gk})
Mock.mock('/Per',{artticles})