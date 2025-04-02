#!/bin/bash

echo "启动RNAcentre网站服务器..."
echo "请选择以下选项之一："
echo "1. 使用Python 3启动服务器"
echo "2. 使用Python 2启动服务器"
echo "3. 使用Node.js http-server启动服务器（需要先安装）"

read -p "请输入选项号码 (1-3): " option

case $option in
  1)
    echo "使用Python 3启动服务器..."
    python3 -m http.server 8000
    ;;
  2)
    echo "使用Python 2启动服务器..."
    python -m SimpleHTTPServer 8000
    ;;
  3)
    echo "检查是否安装了http-server..."
    if ! command -v http-server &> /dev/null
    then
      echo "http-server未安装。正在尝试安装..."
      npm install -g http-server
    fi
    echo "使用http-server启动服务器..."
    http-server -p 8000
    ;;
  *)
    echo "无效选项。退出。"
    exit 1
    ;;
esac

echo "服务器已启动，请在浏览器中访问：http://localhost:8000" 