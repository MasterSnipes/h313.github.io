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
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>projects.txt</p>');
      }
    }
    else if($scope.command === "cat projects.txt") {
      $scope.output = $sce.trustAsHtml( $scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p><a class="red" href="https://h313.github.io/KarlMarkov/">Karl Markov</a></p><p><a class="red" href="https://h313.github.io/SirMarkov/">Sir Markov</a></p><p><a class="red" href="https://h313.github.io/redirekt/">Redirekt</a></p><p><a class="red" href="https://h313.github.io/nodeChat/">nodeChat</a></p><p><a class="red" href="https://h313.github.io/club-charterhelper/">club-charterhelper</a></p><p><a class="red" href="https://github.com/h313/jsCompress/">jsCompress</a></p><p><a class="red" href="https://h313.github.io/wcec-em/">WCEC</a></p>');
    }
    else {
      $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>unknown command</p>');
    }
    $scope.command = "";
  };
});
