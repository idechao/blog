
#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

echo "Hello World !"

target_dir=$(dirname "$PWD") 
target_path="${target_dir}/dist"

echo $target_path

git remote set-url origin git@github.com:idechao/blog.git
git push origin master -f

echo '成功部署到远端仓库'


