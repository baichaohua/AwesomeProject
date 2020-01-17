#!/bin/zsh

#####################################################################################################################################
# 判断是否要重新安装 nodeModules
function reInstallNodeModules()
{
         shouldReInstallNodeModules=$1;
         #转小写
         shouldReInstallNodeModules=$(echo $shouldReInstallNodeModules | tr '[A-Z]' '[a-z]');
         #判断是否要重新安装
        if [[ $shouldReInstallNodeModules = "yes" ]]; then
            installNodeModules $shouldReInstallNodeModules;
        else
            echo "不需要重新安装 NodeModules !";
        fi

}

# 安装 nodemodules
function installNodeModules() {
    echo "准备安装 NodeModules....";
    # 移除之前的文件
    rm -rf ./node_modules;
    rm -rf ./yarn-error.log;
    rm -rf ./yarn.lock;
    echo "开始安装 NodeModules 参数是 $1";
    # 开始安装 nodeModels
    yarn install ;
    echo "NodeModules 安装完毕."

}


# 是否重装 Pod
function reinstallPods() {
         shouldReInstallPods=$1;
         #转小写
         shouldReInstallPods=$(echo $shouldReInstallPods | tr '[A-Z]' '[a-z]');
         #进入 iOS 的目录
         cd "$workspace_path/ios/";
         #判断是否要重新安装
        if [[ $shouldReInstallPods = "yes" ]]; then
            installPods $shouldReInstallPods;
        else
            echo "不需要重新安装 Cocoapods !";
        fi
        #返回工作目录
        cd $workspace_path;

}

# 安装 Pod
function installPods() {
    echo "准备安装 Cocoapods....";
    # 移除之前的文件
    rm -rf "$workspace_path/ios/Pods";
    rm -rf "$workspace_path/ios/Podfile.lock";
    echo "开始安装 Cocoapods 参数是 $1";
    # 开始安装 nodeModels
    pod install ;
    echo "Cocoapods 安装完毕."
}
#####################################################################################################################################



echo `pwd`
#1. 保存当前的工作路径
workspace_path=`pwd`;
#2. 获取当前脚本所在路径
current_sh_path=`dirname $0`;
#3.检查是否需要重新安装 NodeModules
reInstallNodeModules $1
#4. 检查是否需要重新安装 pod
reinstallPods $2
#5. 回到工作路径
cd $workspace_path;

echo "脚本执行完毕";
