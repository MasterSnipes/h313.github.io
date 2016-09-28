var terminalApp = angular.module('terminalApp', []);

terminalApp.controller('TerminalController', function TerminalController($scope, $sce){
  $scope.command = "";
  $scope.output = $sce.trustAsHtml('<p>ARCH-4.7.1.1</p><p>Use <span class="green">help</span> for commands</p>');
  $scope.update = function() {
    if($scope.command === "help") {
      console.log(1);
      $scope.output = $sce.trustAsHtml('<p><span class="green">ls</span></p>');
    }
    else if($scope.command === "ls") {
      console.log(2);
      $scope.output = $sce.trustAsHtml('<p>projects</p>');
    }
    else if($scope.command === "cat projects") {
      console.log(3);
      $scope.output = $sce.trustAsHtml('<p><a class="red" href="https://h313.github.io/KarlMarkov/">Karl Markov</a></p><p><a class="red" href="https://h313.github.io/SirMarkov/">Sir Markov</a></p>');
    }
    $scope.command = "";
  };
});

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
