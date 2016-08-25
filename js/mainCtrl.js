angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

$scope.getMessages = function(){
  messageService.getMessages().then(function(response){
    // console.log(response.data)
    $scope.messages = response.data;
  })
}
$scope.postMessages = function(message){
  messageService.postMessage(message);
}





   setInterval(function(){
    $scope.getMessages();
   }, 1500)
 })
