angular.module("myapp",[])
    .controller("dolist",["$scope","$filter",function ($scope,$filter) {
        $scope.data=localStorage.messages?JSON.parse(localStorage.messages):[]
        /*当前的子内容*/
        $scope.currentId=$scope.data.length?$scope.data[0].id:null;
        $scope.currentCon=$scope.data.length?$scope.data[getIndex($scope.currentId)]:null;
        /*添加列表*/
        $scope.addlist=function () {
            $scope.isshow=true
            var maxId=getMaxId($scope.data)
            var obj={id:maxId+1,title:"欢迎使用NoteList",son:[]}
            $scope.data.push(obj)
            localStorage.messages=JSON.stringify($scope.data)
            //每次添加都显示最新的列表
            $scope.currentId=maxId+1;
            $scope.currentCon=$scope.data[getIndex($scope.currentId)];
        }
        /*删除列表*/
        $scope.removeList=function (id) {
            $scope.isshow=true

            console.log(id)
            angular.forEach($scope.data,function (val,index) {
                if(val.id==id){
                    //判断只有一个列表的时候
                    if($scope.data.length==1){
                        $scope.currentId=null
                        $scope.currentCon=[]
                    }else if(id==$scope.data[$scope.data.length-1].id){
                        //判断倒序删除时，显示前一个
                        $scope.currentId=$scope.data[$scope.data.length-2].id
                        $scope.currentCon=$scope.data.length?$scope.data[getIndex($scope.currentId)]:null
                    }else if(id==$scope.data[0].id){
                        //判断顺序删除时，显示后一个
                        $scope.currentId=$scope.data[1].id
                        $scope.currentCon=$scope.data.length?$scope.data[1]:null
                    }else{
                        //随机删除时，显示前一个
                        $scope.currentId=$scope.data[getIndex(id)+1].id
                        console.log($scope.currentId)
                        $scope.currentCon=$scope.data.length?$scope.data[getIndex($scope.currentId)]:null
                    }

                    $scope.data.splice(index,1)
                    localStorage.messages=JSON.stringify($scope.data)
                }
            })
        }
        /*列表映射*/
        $scope.focus=function (id) {
            $scope.isshow=true

            $scope.currentId=id;
            $scope.currentCon=$scope.data.length?$scope.data[getIndex($scope.currentId)]:null;
        }
        /*更改列表数据*/
        $scope.blur=function () {
            $scope.isshow=true

            localStorage.messages=JSON.stringify($scope.data)
        }
        /*添加列表内容（son 内容）*/
        $scope.addCon=function () {
            var id=getMaxId($scope.currentCon.son)
            var obj={id:id+1,title:"新建项目"}
            $scope.currentCon.son.push(obj)
            localStorage.messages=JSON.stringify($scope.data)
        }
        /*删除son内容*/
        $scope.removeCon=function (id) {
            for(var i=0;i<$scope.currentCon.son.length;i++){
                if(id==$scope.currentCon.son[i].id){
                    $scope.currentCon.son.splice(i,1)
                }
            }
            localStorage.messages=JSON.stringify($scope.data)
        }
        /*修改son内容*/
        $scope.conBlur=function () {
            localStorage.messages=JSON.stringify($scope.data)
        }

        /*存储已完成的*/
        $scope.success=localStorage.success?JSON.parse(localStorage.success):[]
        /*存入已完成的数组*/
        $scope.done=function (id) {
            //1.放入success
            var index=getIndex(id,$scope.currentCon.son)
            var obj=$scope.currentCon.son[index]
            obj.id=getMaxId($scope.success)+1
            $scope.success.push(obj)
            //2.从原数组删除
            $scope.currentCon.son.splice(index,1)
            localStorage.success=JSON.stringify($scope.success)
            localStorage.messages=JSON.stringify($scope.data)

        }

        /*开关*/
        $scope.isshow=true


        /*删除已完成*/
        $scope.removeDone=function (id) {
            console.log(id)
            for (var i=0;i<$scope.success.length;i++){
                if($scope.success[i].id==id){
                    $scope.success.splice(i,1)
                }
            }
            localStorage.success=JSON.stringify($scope.success)
        }
        
        /*监控search*/
        $scope.search=""
        $scope.$watch("search",function () {
            var arr=$filter('filter')($scope.data,$scope.search)
            $scope.currentCon=$scope.data[getIndex(arr[0].id)];
        })
        




        //获取最大id
        function getMaxId(arr) {
            var temp
            if(arr.length!=0){
                temp=arr[0].id
                for (var i=0;i<arr.length;i++){
                    if(temp<arr[i].id){
                        temp=arr[i].id
                    }
                }
            }else{
                temp=0
            }
            return parseInt(temp)

        }
        //获取当前id  对应的内容下标
        function getIndex(id,arr) {
            var arr=arr||$scope.data
            for (var i=0;i<arr.length;i++){
                if (id==arr[i].id){
                    return i
                }
            }
        }
        
        
    }])

