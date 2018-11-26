module.exports  = {    
	apps: [{

		// 启动后的name，相当于：pm2 start app.js --name app_nav_server
		"name": "app_nav_server",

		// "cwd": "",// app.js的位置
		
		"script": "bin/www", // 启动的入口
		"log_date_format": "YYYY-MM-DD HH:mm Z",

		//自定义应用程序的错误日志文件
		"error_file": "log/node-app.stderr.log",
		
		//自定义应用程序日志文件
		"out_file": "log/node-app.stdout.log",
		"pid_file": "pids/node-geo-api.pid",
		// 负载均衡模式，使用2个核心，相当于：pm2 start app.js -i 2
		"instances": 1,

		//最小运行时间，这里设置的是60s,即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
		"min_uptime": "60s",

		//设置应用程序异常退出重启的次数，默认15次（从0开始计数）
		"max_restarts": 10,

		// 最大内存占用，相当于：pm2 start app.js --max_memory_restart 20M
		"max_memory_restart": "1M",
		
		//定时启动，解决重启能解决的问题
		// "cron_restart": "1 0 * * *",
		
		// 监听文件修改，相当于：pm2 start app.js --watch
		// 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件(数组)。
		"watch": false,
		"merge_logs": true,
		"exec_interpreter": "node",
		"exec_mode": "fork",//应用程序启动模式
		"autorestart": true,//启用/禁用应用程序崩溃或退出时自动重启
		"vizion": false//启用/禁用vizion特性(版本控制)
	}]
};