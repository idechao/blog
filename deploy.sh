
#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

target_dir=$(dirname "$PWD") 
target_path="${target_dir}/dist"
cd $target_path
echo ${PWD}

git init
git add .
git commit -m "update files content"

if [ $? -eq 0 ]; then
  echo 'git commit successful'
else 
  echo 'git commit failed'
fi

git remote add origin git@github.com:idechao/blog.git

if [ $? -eq 0 ]; then
  echo 'origin url add successful'
else 
  echo 'origin url add failed'
fi

git push origin master -f

if [ $? -eq 0 ]; then
  echo 'push origin successful'
else 
  echo 'push origin failed'
fi

echo 'deploy successful'


