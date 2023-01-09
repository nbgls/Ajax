// 引入express文件
const { request, response } = require('express');
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/',(request,response) => {
  // 设置响应
  response.send('HELLO EXPRESS -AJAX');
})
app.post('/server',(request,response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  response.send('HELLO AJAX POST');
})
app.all('/serverss',(request,response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 响应头
  response.setHeader('Access-Control-Allow-Headers','*');
  // 响应一个数据
  const data = {
    name:'dsy'
  }
  let str = JSON.stringify(data);
  // 设置响应体
  response.send(str);
})
app.all('/server',(request,response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 响应头
  response.setHeader('Access-Control-Allow-Headers','*');
  // 设置响应体
  response.send('HELLO AJAX AJAX');
})
app.get('/delay',(request,response) => {
  response.setHeader('Access-Control-Allow-Origin','*')
  setTimeout(()=>{
    response.send('延时响应')
  },3000)
})
app.all('/axios-server',(request,response) =>{
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','*');
  const data = {
    name:'dsy'
  };
  response.send(JSON.stringify(data));
})
app.get('/ceshi',(request,response) =>{
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','*');
  const data ={
    '学号':21300230204,
    手机号:17318071915,
    邮箱:'nbgls173@.sina.com',
    密码:'dsy173526'
  };
  response.send(JSON.stringify(data));
})
// 监听端口启动服务
app.listen(8000, ()=>{
  console.log('服务已启动，8000 端口监听中....');
})