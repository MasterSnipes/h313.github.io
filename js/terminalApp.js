var terminalApp = angular.module('terminalApp', []);

var listProjects = [{name: 'karlMarkov', url: 'https://h313.github.io/KarlMarkov', desc: 'A Markov Chain text generator based on the Communist Manifesto'},
                    {name: 'sirMarkov', url: 'https://h313.github.io/SirMarkov', desc: 'A Markov Chain text generator based on Macbeth'},
                    {name: 'nodeChat', url: 'https://h313.github.io/nodeChat', desc: 'An anonymous NodeJS chat client'},
                    {name: 'jsCompress', url: 'https://github.com/h313/jsCompress', desc: 'A JavaScript compression library'},
                    {name: 'club-charterhelper', url: 'https://h313.github.io/club-charterhelper', desc: 'An awkward name for a club manager'},
                    {name: 'blueHenTreats', url: 'http://bluehentreats.com', desc: 'Fresh fruit. Dried.'},
                    {name: 'wcec', url: 'https://h313.github.io/wcec-em', desc: 'Wilmington Community Evangelical Church'}];
var listSocial = [];

terminalApp.controller('TerminalController', function TerminalController($scope, $sce, $location, $anchorScroll){
  $scope.command = "help";
  $scope.output = $sce.trustAsHtml('<p>ARCH-4.7.1.1</p><p>Use <span class="green">help</span> for commands</p>');
  var loc = 0;
  $scope.update = function() {
    if($scope.command === "help") {
      $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p class="green">ls</p><p class="green">cat</p>');
    }
    else if($scope.command === "ls") {
      if(loc === 0) {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>projects</p>');
      }
      else if(loc === 1) {
        var list = '';
        for(var i = 0; i < listProjects.length; i++) {
          list += '<p class="red"><a href="' + listProjects[i].url + '">' + listProjects[i].name + '</a></p>'
        }
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + list);
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
