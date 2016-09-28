var terminalApp = angular.module('terminalApp', []);

terminalApp.controller('TerminalController', function TerminalController($scope, $sce){
  $scope.command = "help";
  $scope.output = $sce.trustAsHtml('<p>ARCH-4.7.1.1</p><p>Use <span class="green">help</span> for commands</p>');
  $scope.update = function() {
    if($scope.command == "help")
      $scope.output = $sce.trustAsHtml("<p></p>");
    $scope.command = "";
  };
});
