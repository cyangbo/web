<!DOCTYPE html>
<html  lang="zh-CN">

 <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="renderer" content="webkit">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="index.css">
  <style>
	
	.starter{
		text-align:center;
	}
	
	.row{
		margin-bottom:20px;
	}
	/*
	 *通配col开头的class都应用
	 */
	[class*="col-"]{
		padding-top:15px;
		padding-bottom:15px;
		background-color:#eee;
		border:1px solid #ddd;
		
	}

  </style>
  


    <title></title>
</head>
<body>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	<div class="container">
		<div class="navbar-header">
			<a href="#" class="navbar-brand">项目名字</a>
		</div>
		
		<div id="navbar" class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li class="active"><a href="#">Home</a></li>
				<li><a href="http://www.baidu.com">About</a></li>
				<li><a href="#">hello</a></li>
			</ul>
		</div>
	</div>
</nav>

<div class="container">
  <div class="starter">
    <h1>sdjlfsldflsdlf</h1>
    <h2>ssss</h2>
    <h3>ssss</h3>
    <h4>ssss<small>ssss</small></h4>
    <p>hellohellohellohellohellohellohello</p>
    <p class="lead">hellohell<abbr title="attribute标题">sss</abbr>ohellohellohellohellohello</p>
    <p>hellohellohellohellohellohellohello</p>
    <p>hellohellohellohellohello<mark>hello</mark>hellohello</p>
    <del>ssss</del>
    
    <p class="text-center">hellohellohellohellohellohellohello</p>
    <p class="text-left">hellohellohellohellohellohellohello</p>
    <p class="text-right">hellohellohellohellohellohellohello</p>
    
    <p class="text-lowercase">ssSss</p>
    <p class="text-uppercase">ssSss</p>
    <p class="text-capitalize">ssSss</p>
    
    <address>
    	<strong>地址</strong><br>
    	广东省,潮州市<br>
    	湘桥区,凤新街道:1008
    	<abbr title="phone">P:8888 8888</abbr>
    </address>
    
    <ul class="list-unstyled">
    	<li>加上class变成无序列表</li>
    	<li>1</li>
    	<li>1</li>
    </ul>
    
  </div>
</div>




<div class="container-fluid">

  <div class="row">
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
  </div>
  <div class="row">
	  <div class="col-md-8">.col-md-8</div>
	  <div class="col-md-4">.col-md-4</div>
  </div>
  <div class="row">
  	<div class="col-md-4 col-md-offset-2 ">sss</div>
  </div>
  
  <div class="row">
  	<div class="col-sm-9">
  		<div class="row">
  			<div class="col-xs-4">
  			col-xs-4
  			</div>
  			<div class="col-xs-8">
  			col-xs-8
  			</div>
  		</div>
  	</div>
  </div>
  
  <div class="row">
  	<div class="col-md-9 col-md-push-3">col-md-9</div>
  	<div class="col-md-3 col-md-pull-9">col-md-3</div>
  </div>
  
</div>

<div class="container">
  for example <code>&lt;section&gt;</code>as inline;
  键入cmd命令<kbd>cmd</kbd>
  <pre>
  	这个是代码块sample text ...;<sss></sss>
  </pre>
  <samp>用于程序输出内容hello world</samp>
</div>

<!-- 表格 -->

<div class="container">
 <table class="table table-striped table-bordered table-hover table-condensed">
  <thead>
    <tr >
      <th>表格标题</th>
      <th>表格标题</th>
      <th>表格标题</th>
    </tr>
  </thead>
  <tbody>
   <tr class="success">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
   <tr class="active">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
      <tr class="info">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
      <tr class="warning">
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
   </tr>
    <tr class="danger">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
  </tbody>
 </table>
</div>

<!-- 响应式表格 -->

<div class="table-responsive">
 <table class="table table-bordered">
  <thead>
    <tr >
      <th>表格标题</th>
      <th>表格标题</th>
      <th>表格标题</th>
    </tr>
  </thead>
  <tbody>
   <tr class="success">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
   <tr class="active">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
      <tr class="info">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
      <tr class="warning">
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
   </tr>
    <tr class="danger">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
  </tbody>
 </table>
</div>

<!-- 表单
form-inline内联表单宽度变成auto,在一行里面
sr-only隐藏
-->

<form role="form" class="form-inline">
  <div class="form-group">
    <laber class="sr-only">用户名</laber>
    <input type="date" class="form-control" placeholder="user">
  </div>
  
  <div class="form-group">
    <label>密码</label>
    <input type="password" class="form-control" placeholder="请输入密码">
  </div>
  
    <div class="form-group">
    <label>选择文件</label>
    <input type="file">
    <p class="help-block">请选择你的文件</p>
  </div>
  
</form>

<!-- 水平表单
水平的有一些被挡住显示不出来需要调整

-->
<div class="container">
<form role="form" class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
    <input type="email" class="form-control" placeholder="Emial">
    </div>
  </div>
  
  <div class="form-group">
    <label class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
    <input type="password" class="form-control" placeholder="password">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox">记住密码
        </label>
      </div>
    </div>
  </div>
  
  <div class="form-group">  
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">登录</button>
    </div>
  </div>
</form>
</div>


<!-- 表单支持的控件 -->
<div class="container">
<form role="form">
  <input type="text" class="form-control">
  <textarea rows="5" class="form-control"></textarea>
  <div class="checkbox">
    <label>
      <input type="checkbox" value="">打球
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox" value="">游泳
    </label>
  </div>
  
  
  <div class="radio">
    <label>
      <input name="sssss" type="radio" checked>男
    </label>
  </div>
  <div class="radio">
    <label>
      <input name="sssss" type="radio" >女
    </label>
  </div>  
  
  <select multiple class="form-control">
    <option>1</option>
    <option>1</option>
    <option>1</option>
    <option>1</option>
  </select>
  
  <p class="form-control-static">静态的请按照我的格式输入:182236@qq.com</p>
  <p>请按照我的格式输入:182236@qq.com</p>
  
  <input class="form-control" type="text" disabled placeholder="禁用">
  <input class="form-control" type="text" readonly placeholder="只读">
  
</form>

<!-- 整个表单禁用 -->
<div class="container">
<fieldset disabled>
  <form role="form">
  <select multiple class="form-control">
    <option>1</option>
    <option>1</option>
    <option>1</option>
    <option>1</option>
  </select>
  
  <p class="form-control-static">静态的请按照我的格式输入:182236@qq.com</p>
  <p>请按照我的格式输入:182236@qq.com</p>
  
  <input class="form-control" type="text" disabled placeholder="禁用">
  
</form>
</fieldset>
</div>


<!-- 表单状态 -->
  <form role="form">
    <div class="form-group has-warning has-feedback">
      <label>用户名</label>
      <input class="form-control" type="text">
      <span class="glyphicon glyphicon-ok form-control-feedback"></span>
    </div>
        <div class="form-group  has-success">
      <label>用户名</label>
      <input class="form-control" type="text">
    </div>
        <div class="form-group has-error">
      <label>用户名</label>
      <input class="form-control" type="text">
    </div>
  </form>

<!-- 按钮 -->
  <div class="container">
    <button  type="button" class="btn btn-default">btn-default</button>
    <button  type="button" class="btn btn-primary">btn-primary</button>
    <button  type="button" class="btn btn-success">btn-success</button>
    <button  type="button" class="btn btn-info">btn-info</button>
    <button  type="button" class="btn btn-error">btn-error</button>
    <button  type="button" class="btn btn-link">btn-link</button>
    <button  type="button" class="btn btn-danger">btn-danger</button>
  </div>
  
  <div class="container">
    <button  type="button" class="btn btn-info btn-lg">btn-lg</button>
    <button  type="button" class="btn btn-info">btn-info</button>
    <button  type="button" class="btn btn-info btn-sm">btn-sm</button>
    <button  type="button" class="btn btn-info btn-xs">btn-xs</button>
  </div>
  <button  type="button" class="btn btn-info btn-block">btn-block</button>
  
  <a href="#" class="btn btn-default btn-lg active" role="button">链接的按钮</a>
  <a href="#" class="btn btn-default btn-lg" role="button">链接的按钮</a>
  <a href="#" class="btn btn-default btn-lg" disabled role="button">链接的按钮</a>
  
  <input type="button" class="btn btn-default btn-lg" value="input的按钮">
  
  <!-- 下拉菜单 -->
  <div class="container">
	<div class="dropdown pull-right">
		<button class="btn btni-default dropdown-toggle" type="button" data-toggle="dropdown">
		下拉菜单<span class="caret"></span>
		</button>
		<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
			<li role="presentation" class="dropdown-header">大写</li>
			<li><a href="http://www.baidu.com" role="menuitem">一</a></li>
			<li><a href="#" role="menuitem">二</a></li>
			<li class="disabled"><a href="#" role="menuitem">三</a></li>
			<li><a href="#" role="menuitem">四</a></li>
			
			<li role="presentation" class="divider"></li>
			<li><a href="http://www.baidu.com" role="menuitem">一</a></li>
			<li><a href="#" role="menuitem">二</a></li>
			<li><a href="#" role="menuitem">三</a></li>
			<li><a href="#" role="menuitem">四</a></li>
		</ul>
	</div>
</div>

<!-- 按钮组 -->
<div class="container">
  <div class="btn-group">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
  </div>
</div>
<!--工具栏 -->
<div class="btn-toolbar">
  <div class="btn-group">
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-left"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-left"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-left"></span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-center"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-center"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-center"></span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-right"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-right"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-right"></span></button>
  </div>
  
<div class="container">
  <div class="btn-group btn-group-lg">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
  </div>
  <div class="btn-group btn-group-md">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
  </div>
  <div class="btn-group-vertical btn-group-xs">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
  </div>
  
</div>
  
</div>

<!-- 内嵌 -->
  <div class="btn-group">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
    <div class="btn-group">
    	<button type="button" class="btn btn-default dropdown-toggle"  data-toggle="dropdown">下拉菜单<span class="caret"></span></button>
    	<ul class="dropdown-menu" role="menu">
    	  <li><a href="#">电网</a></li>
    	  <li><a href="#">电网</a></li>
    	  <li><a href="#">电网</a></li>
    	  <li><a href="#">电网</a></li>
    	</ul>
    	
    </div>
  </div>
  <!-- 全屏-->
  
  <div class="btn-group btn-group-justified">
    <div class="btn-group">
      <button type="button" class="btn btn-default">Left</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-default">Left</button>
    </div>
  </div>
  
  <!-- 模态框 -->
  <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="myModallabel">Modal title</h4>
          <div class="modal-body">
            Content
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" >Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 静态模态框 -->
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
    启动模态框
  </button>
  
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">
    启动大模态框
  </button>
  <div class="modal bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        这是一个大的模态框
      </div>
    </div>
  </div>
  
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">
    启动小模态框
  </button>
  <div class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        这是一个小的模态框
      </div>
    </div>
  </div>
  
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    data-whatever="@mdo">Open
    modal for @mdo
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="exampleModalLabel">New Message</h4>
        </div>
        
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="control-label">Recipient</label>
              <input class="form-control" type="text" id="recipient-name">
            </div>
          </form>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-default">send</button>
        </div>
        
      </div>
    </div>
  </div>
  
  
  <!--  -->
  <div class="container">
    <div class="media">
      <a class="media-left" href="http://www.baidu.com">
        <img src="img/b.jpg" alt="s">
      </a>
      <div class="media-body">
        <h4 class="media-heading">
          欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </h4>
        <p>欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        <br>
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </p>
      </div>
    </div>
    
    <div class="media">
      <a class="media-left" href="http://www.baidu.com">
        <img src="img/b.jpg" alt="s">
      </a>
      <div class="media-body">
        <h4 class="media-heading">
          欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </h4>
        <p>欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        <br>
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </p>
      </div>
    </div>
    
    <div class="media">
      <a class="media-left" href="http://www.baidu.com">
        <img src="img/b.jpg" alt="s">
      </a>
      <div class="media-body">
        <h4 class="media-heading">
          欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </h4>
        <p>欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        <br>
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </p>
        
        <div class="media">
      <a class="media-left" href="http://www.baidu.com">
        <img src="img/b.jpg" alt="s">
      </a>
      <div class="media-body">
        <h4 class="media-heading">
          欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </h4>
        <p>欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        <br>
        欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎欢迎
        </p>
      </div>
    </div>
    
    
      </div>
    </div>
  </div>
  
  
  <!-- 列表 -->
  
  <div class="container">
    <ul class="media-list">
      <li class="media">
        <a class="media-left" href="#">
          <img src="img/b.jpg" alt="">
        </a>
        <div class="media-body">
          <h4> 欢迎欢迎欢迎欢迎欢迎欢迎欢迎</h4>
          <p> 欢迎欢迎欢迎欢迎欢迎欢迎欢迎 欢迎欢迎欢迎欢迎欢迎欢迎欢迎 欢迎欢迎欢迎欢迎欢迎欢迎欢迎</p>
          <p> 欢迎欢迎欢迎欢迎欢迎欢迎欢迎 欢迎欢迎欢迎欢迎欢迎欢迎欢迎 欢迎欢迎欢迎欢迎欢迎欢迎欢迎</p>
          <p> 欢迎欢迎欢迎欢迎欢迎欢迎欢迎 欢迎欢迎欢迎欢迎欢迎欢迎欢迎 欢迎欢迎欢迎欢迎欢迎欢迎欢迎</p>
        </div>
      </li>
    </ul>
  </div>
  
  <!-- 面板 -->
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-body">
        hello world!
      </div>  
    </div>
    
    <div class="panel panel-success">
      <div class="panel-heading">
        这个是头部
      </div>
      <div class="panel-body">
        这是身体 这是身体 这是身体 这是身体<br>
         这是身体 这是身体 这是身体 这是身体<br>
          这是身体 这是身体 这是身体 这是身体<br>
      </div>
      <div class="panel-footer panel-danger">
      这个是角标脚部
    </div>
    </div>
    
    <div class="panel panel-default">
      <div class="panel-heading">
        liebiao
      </div>
      <div class="panel-body">
        <p>这个是身体</p>
      </div>
      <table class="table">
        <thead>
    <tr >
      <th>表格标题</th>
      <th>表格标题</th>
      <th>表格标题</th>
    </tr>
  </thead>
  <tbody>
   <tr class="success">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
   <tr class="active">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
      <tr class="info">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
      <tr class="warning">
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
     <td>表格体表格体表格体表格体表格体表格体表格体</td>
   </tr>
    <tr class="danger">
     <td>表格体</td>
     <td>表格体</td>
     <td>表格体</td>
   </tr>
  </tbody>
      </table>
    </div>
    
    
    <div class="panel panel-default">
      <div class="panel-heading">
        Hello
      </div>
      <div class="panel-body">
        World
      </div>
      <ul class="list-group">
        <li class="list-group-item">heools</li>
        <li class="list-group-item">heools</li>
        <li class="list-group-item">heools</li>
        <li class="list-group-item">heools</li>
      </ul>
    </div>
    
  </div>
  
  

  
<script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
<script src="http://cdn.bootcss.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script>
  // $("#myModal").modal("show");
  $("#exampleModal").on("show.bs.modal",function(event){
	  var button = $(event.relatedTarget)
	  var recipient = button.data("whatever")
	  var modal=$(this);
	  modal.find(".modal-title").text"New Massage to"+recipient);
      modal.find(".modal-body input").val(recipient)
  });
</script>
</body>
</html>