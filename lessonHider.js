angular.module('app').directive('lessonHider', function(){
  return {
    templateUrl: './lessonHider.html',
    restrict: "E",
    scope: {
      lesson:'=',
      dayAlert: '&'

    },

    controller: function($scope, lessonService){
      $scope.schedule = lessonService.getSchedule();


    },
    link: function(scope, element, attributes){
      scope.schedule.then(function(response){
        scope.schedule = response.data;
        //console.log(scope.schedule)


        scope.schedule.forEach(function(scheduleDay){
          if (scheduleDay.lesson === scope.lesson){
            scope.lessonDay = scheduleDay.weekday;
            //console.log(  scope.lessonDay)
            element.css('text-decoration', 'line-through')
            return

          }
        })

      })


    }

  }


})
