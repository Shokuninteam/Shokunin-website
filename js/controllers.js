var challengeApp = angular.module('shokuninApp', []);

challengeApp.controller('IndividualCtrl', function ($scope, $http) {

  function getUrlParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam)
      {
        return sParameterName[1];
      }
    }
  }

  var addresses = {
    frank : '292 Wakefield Street, Te Aro, Wellington 6011',
    mohamed : 'Paris, France',
    julie : '292 Wakefield Street, Te Aro, Wellington 6011'
  }
  var frank = {
    name : 'Frank Bassard',
    genrePic : 'male154.svg',
    description : '| 25 yo | Software developer',
    roles : [
      'Web & Mobile developer',
      'Business management',
      'UX & UI',
      'Advisor'
    ],
    hobbies : 'Physical conditioning | Coffee | Tech | Design',
    contacts : {
      col1 : [{
        url : 'https://twitter.com/MyRulz89',
        pic : 'img/svg/twitter21.svg',
        name : 'Twitter',
      }, {
        url : 'https://github.com/BassardF',
        pic : 'img/svg/github13.svg',
        name : 'GitHub',
      }, {
        url : 'https://www.facebook.com/frank.bassard',
        pic : 'img/svg/facebook29.svg',
        name : 'Facebook',
      }],
      col2 : [{
        url : 'https://www.linkedin.com/in/frankbassard',
        pic : 'img/svg/linkedin11.svg',
        name : 'LinkedIn',
      }, {
        url : 'http://www.meetup.com/members/182921267/',
        pic : 'img/svg/meetup.svg',
        name : 'MeetUp',
      }],
      col3 : [{
        url : 'mailto: f.bassard@gmail.com',
        pic : 'img/svg/mail59.svg',
        name : 'Mail',
      }, {
        url : 'https://www.google.com/maps?q=' + addresses.frank.replace(" ", "+"),
        pic : 'img/svg/facebook30.svg',
        name : 'Map',
      }]
    }
  },
  mohamed = {
    name : 'Mohamed Mokhtari',
    genrePic : 'male154.svg',
    description : '| 24 yo | Software developer',
    roles : [
    'Full stack developer',
    'Architect',
    'Web design',
    'Marketing'
    ],
    hobbies : 'Travel | Movies | Tech | Fashion ',
    contacts : {
      col1 : [{
        url : 'https://github.com/mohamedMok',
        pic : 'img/svg/github13.svg',
        name : 'GitHub',
      }, {
        url : 'https://www.linkedin.com/pub/mohamed-mokhtari/5b/647/176',
        pic : 'img/svg/linkedin11.svg',
        name : 'LinkedIn',
      }],
      col2 : [{
        url : 'mailto: mohamed.mokhtari.pro@gmail.com',
        pic : 'img/svg/mail59.svg',
        name : 'Mail',
      }, {
        url : 'https://www.google.com/maps?q=' + addresses.mohamed.replace(" ", "+"),
        pic : 'img/svg/facebook30.svg',
        name : 'Map',
      }]
    }
  },
  julie = {
    name : 'Julie Huguet',
    genrePic : 'female128.svg',
    description : '| 27 yo | Software developer',
    roles : [
    'iOS/Android developer',
    'Community manager',
    'UI & Design',
    'Ideas igniter'
    ],
    hobbies : 'Sciences | Travel | Sport & Nutrition | Tea & Coffee | Nature',
    contacts : {
      col1 : [{
        url : 'https://twitter.com/JHuguet87',
        pic : 'img/svg/twitter21.svg',
        name : 'Twitter',
      }, {
        url : 'https://github.com/LittleCatBear',
        pic : 'img/svg/github13.svg',
        name : 'GitHub',
      }],
      col2 : [{
        url : 'https://www.linkedin.com/pub/julie-huguet/78/909/4a4',
        pic : 'img/svg/linkedin11.svg',
        name : 'LinkedIn',
      }, {
        url : 'http://www.meetup.com/members/182921399/',
        pic : 'img/svg/meetup.svg',
        name : 'MeetUp',
      }],
      col3 : [{
        url : 'mailto: j.huguet9@gmail.com',
        pic : 'img/svg/mail59.svg',
        name : 'Mail',
      }, {
        url : 'https://www.google.com/maps?q=' + addresses.julie.replace(" ", "+"),
        pic : 'img/svg/facebook30.svg',
        name : 'Map',
      }]
    }
  },
  spread = {
    name : 'Spread',
    description : 'Spread is the next digital agora for valuable information. Share your best ideas knowing that the entire world is within your reach and chose which ideas are worth spreading. You are the best provider as well as the best judge, don\'t underestimate the value of your ideas and your judgment.',
    img : 'archi.png',
    contacts : {
      col1 : [{
        url : 'https://github.com/Shokuninteam/Spread',
        pic : 'img/svg/hosting.svg',
        name : 'GitHub : Server',
      }],
      col2 :[{
        url : '#',
        pic : 'img/svg/apple4.svg',
        name : 'GitHub : Client',
      }]
    }
  },
  spur = {
    name : 'Spur',
    //description : 'Spur is a nice small mobile project.Its purpose is to keep you motivated and to help you achieve your goals, whatever they are',
    description : 'Do you feel on the verge of reaching great goals but lacking of motivation? Spur will help you stay motivated and focus on your most valuable goals. Customize the App according to your needs and enjoy your achievements !',
    img : 'spur-archi.png',
    contacts : {
      col1 : [{
        url : 'https://github.com/Shokuninteam/Spur',
        pic : 'img/svg/hosting.svg',
        name : 'GitHub',
      }]
    }
  };

  $scope.project = spread;
  $scope.current = frank;
  $scope.showPersonnalBlock = false;
  $scope.showProjectBlock = true;

  $scope.clickSpread = function(){
    $(".head-pic").removeClass("selected");
    $("#spread-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-spread");
    $scope.project = spread;
    $scope.showPersonnalBlock = false;
    $scope.showProjectBlock = true;
  }

  $scope.clickSpur = function(){
    $(".head-pic").removeClass("selected");
    $("#spur-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-spur");
    $scope.project = spur;
    $scope.showPersonnalBlock = false;
    $scope.showProjectBlock = true;
  }

  $scope.clickFrank = function(){
    $(".head-pic").removeClass("selected");
    $("#frank-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-frank");
    $scope.current = frank;
    $scope.showPersonnalBlock = true;
    $scope.showProjectBlock = false;
  }

  $scope.clickMohamed = function(){
    $(".head-pic").removeClass("selected");
    $("#mohamed-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-mohamed");
    $scope.current = mohamed;
    $scope.showPersonnalBlock = true;
    $scope.showProjectBlock = false;
  }

  $scope.clickJulie = function(){
    $(".head-pic").removeClass("selected");
    $("#julie-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-julie");
    $scope.current = julie;
    $scope.showPersonnalBlock = true;
    $scope.showProjectBlock = false;
  }

  var param = getUrlParameter('show');
  if (param === "spread") $scope.clickSpread();
  else if (param === "spur") $scope.clickSpur();
  else if (param === "frank") $scope.clickFrank();
  else if (param === "mohamed") $scope.clickMohamed();
  else if (param === "julie") $scope.clickJulie();

});
