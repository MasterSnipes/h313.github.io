var terminalApp = angular.module('terminalApp', []);

terminalApp.controller('TerminalController', function TerminalController($scope, $sce){
  $scope.command = "help";
  $scope.output = $sce.trustAsHtml('<p>ARCH-4.7.1.1</p><p>Use <span class="green">help</span> for commands</p>');
  var loc = 0;
  $scope.update = function() {
    if($scope.command === "help") {
      $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p><span class="green">ls</span></p>');
    }
    else if($scope.command === "ls") {
      if(loc === 0) {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>projects</p>');
      }
      else if(loc === 1) {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p><a class="red" href="https://h313.github.io/KarlMarkov/">karlMarkov</a></p><p><a class="red" href="https://h313.github.io/SirMarkov/">sirMarkov</a></p><p><a class="red" href="https://h313.github.io/redirekt/">redirekt</a></p><p><a class="red" href="https://h313.github.io/nodeChat/">nodeChat</a></p><p><a class="red" href="https://h313.github.io/club-charterhelper/">club-charterhelper</a></p><p><a class="red" href="https://github.com/h313/jsCompress/">jsCompress</a></p><p><a class="red" href="https://github.com/h313/jsCompress/">Blue Hen Treats</a></p><p><a class="red" href="https://h313.github.io/wcec-em/">wcec</a></p>');
      }
    }
    else if($scope.command === "cd projects") {
      if(loc === 0) {
        $scope.output= $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>');
        loc = 1;
      }
      else {
        $scope.output= $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>no such folder</p>');
      }
    }
    else if($scope.command === "cd .." || $scope.command === "cd ../") {
      if(loc === 0) {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>access denied</p>');
      }
      else if(loc == 1) {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>');
        loc = 0;
      }
    }
    else {
      $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>unknown command</p>');
    }
    $scope.command = "";
    $location.hash('cmd');
    $anchorScroll();
  };
});
