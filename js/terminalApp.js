var terminalApp = angular.module('terminalApp', []);

var listProjects = [{name: 'karlMarkov', url: 'https://h313.github.io/KarlMarkov', desc: 'A Markov Chain text generator based on the Communist Manifesto'},
                    {name: 'sirMarkov', url: 'https://h313.github.io/SirMarkov', desc: 'A Markov Chain text generator based on Macbeth'},
                    {name: 'nodeChat', url: 'https://h313.github.io/nodeChat', desc: 'An anonymous NodeJS chat client'},
                    {name: 'jsCompress', url: 'https://github.com/h313/jsCompress', desc: 'A JavaScript compression library'},
                    {name: 'club-charterhelper', url: 'https://h313.github.io/club-charterhelper', desc: 'An awkward name for a club manager'},
                    {name: 'blueHenTreats', url: 'http://bluehentreats.com', desc: 'Fresh fruit. Dried.'},
                    {name: 'wcec', url: 'https://h313.github.io/wcec-em', desc: 'Wilmington Community Evangelical Church'}];
var listSocial = [{name: 'github', url: 'https://github.com/h313'},
                  {name: 'facebook', url: 'https://www.facebook.com/haoda.wang.71'},
                  {name: 'tumblr', url: 'https://andyetitcompiles.tumblr.com/'},
                  {name: 'steam', url: 'http://steamcommunity.com/id/h313'}];

terminalApp.controller('TerminalController', function TerminalController($scope, $sce, $location, $anchorScroll, $window){
  $scope.command = "help";
  $scope.output = $sce.trustAsHtml('<p>ARCH-4.7.1.1</p><p>Use <span class="green">help</span> for commands</p>');
  var loc = 0;
  $scope.update = function() {
    if($scope.command === "help") {
      $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p class="green">cd</p><p class="green">ls</p><p class="green">cat</p><p class="green">help</p>');
    }
    else if(loc === 0) {
      if($scope.command === "ls") {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>projects</p><p>connect</p>');
      }
      else if($scope.command === "cd .." || $scope.command === "cd ../") {
          $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p>access denied. nice try tho!</p>');
      }
      else if($scope.command === "cd projects") {
        $scope.output= $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>');
        loc = 1;
      }
      else if($scope.command === "cd connect") {
        $scope.output= $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>');
        loc = 2;
      }
      else {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p class="blue">error</p>');
      }
    }
    else if(loc === 1) {
      if($scope.command === "ls") {
        var list = '';
        for(var i = 0; i < listProjects.length; i++) {
          list += '<p class="red"><a href="' + listProjects[i].url + '">' + listProjects[i].name + '</a></p>'
        }
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + list);
      }
      else if($scope.command === "cd .." || $scope.command === "cd ../") {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>');
        loc = 0;
      }
      else if($scope.command.substring(0,3) == "cat") {
        var tempInt = 0;
        for(var i = 0; i < listSocial.length; i++) {
          if(listProjects[i].name == $scope.command.slice(3)) {
            tempInt = i;
            break;
          }
        }
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p><p><a class="orange" href="' + listProjects[tempInt].url + '">' + listProjects[tempInt].desc + "</a></p>");
      }
      else {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p class="blue">error</p>');
      }
    }
    else if(loc === 2) {
      if($scope.command === "ls") {
        var list = '';
        for(var i = 0; i < listSocial.length; i++) {
          list += '<p class="red"><a href="' + listSocial[i].url + '">' + listSocial[i].name + '</a></p>'
        }
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + list);
      }
      else if($scope.command.substring(0,3) == "cat") {
        var tempInt = 0;
        for(var i = 0; i < listSocial.length; i++) {
          if(listSocial[i].name == $scope.command.slice(3)) {
            tempInt = i;
            break;
          }
        }
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p><p><a class="orange" href="' + listSocial[tempInt].url + '">' + listSocial[tempInt].name + "</a></p>");
      }
      else if($scope.command === "cd .." || $scope.command === "cd ../") {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>');
        loc = 0;
      }
      else {
        $scope.output = $sce.trustAsHtml($scope.output + '<p><span class="green">> </span>' + $scope.command + '</p>' + '<p class="blue">error</p>');
      }
    }

    $scope.command = "";
    $location.hash('cmd');
    $anchorScroll();
  };
});
