/*angular.module("myApp",[])
.controller("democon",["$scope",function($scope){
    var user = [
       {
           user:"marry", 
           email:"marry@sohu.com" 
       },
       {
           user:"Lili",
           email:"Lili@sohu.com"
       }
    ]
    $scope.user = user;
    $scope.isShow = false;
    $scope.counter = 0;
    $scope.add = function(){
        this.counter++;
    }

    // 所学课程
    $scope.items = [];


    // 添加课程
    $scope.addItem = function(event){
        if(event.keyCode == "13"){
            $scope.items.unshift($scope.item);
            $scope.item = "";
        }
    }
 
    $scope.limit = 4;
    $scope.books = [
       {
           name:"JavaScript高级程序设计",publite:false,ishas:true,updated:1480574804538
       },
       {
           name:"Angular权威指南",publite:true,ishas:false,updated:1470574804525
       },
       {
           name:"Vue实战",publite:false,ishas:true,updated:1480374804538
       },
       {
           name:"Node全栈开发",publite:true,ishas:false,updated:1480271504538
       }
    ]

    $scope.price = 199.98;
    $scope.isBuy=false;
}])*/
angular.module("myApp",[])
.controller("myController",["$scope",function($scope){
  $scope.col='FirstName';
  $scope.desc=0;
  var friends=[
        {
          FirstName:"FANG",
            LastName:"Vane",
            Gender:"Male",
            Salary:"12,333,50",
            Birthday:"2007-07-11"
        },
        {
          FirstName:"SARA",
            LastName:"rose",
            Gender:"Female",
            Salary:"232,334,23",
            Birthday:"1997-02-03"
        },
        {
          FirstName:"AAM",
            LastName:"hot",
            Gender:"Male",
            Salary:"66,880,50",
            Birthday:"1986-03-04"
        },
        {
          FirstName:"MARK",
            LastName:"bear",
            Gender:"Male",
            Salary:"68,000,00",
            Birthday:"1968-03-22"
        }
  ]
  $scope.friends=friends;
}])