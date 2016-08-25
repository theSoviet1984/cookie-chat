angular.module('chatroom').service('messageService', function($http){


  this.getMessages = function (){
    return $http.get('http://practiceapi.devmounta.in/api/chats')
  }

  this.postMessage = function (message){
    return $http({
      method: 'POST',
      url: ('http://practiceapi.devmounta.in/api/chats'),
      data: {
        message: message
      }
    })
}

});
