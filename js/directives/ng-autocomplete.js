aydoor.directive('ngAutocomplete', ngAutocomplete);
function ngAutocomplete(){
    var directive = {
        scope:{
            detail: '=',
        },
        template: '<input class="form-control ng-service-input" ng-change="suggest()" ng-model="detail.name" class="form-service" placeholder="Qué servicio buscas?"><ul ng-show="results" class="suggest"><li class="suggest-element" ng-click="select(service)" ng-repeat="service in results">{{service.name}}</li></ul>',
        controller: Controller,
    };

    return directive;

    function Controller($scope, $rootScope, Service, $attrs){

        $scope.suggest = function(){
            if ($scope.detail.name){
                Service.query({name__icontains:$scope.detail.name}, null, $scope.onSuggest, $scope.onSuggestErr);
            }else{
                $scope.results = null;
            }
        }

        $scope.onSuggest = function(response){
            $scope.results = response;
        }
        
        $scope.onSuggestErr = function(response){
            console.log('error');
        }

        $scope.select = function(element){
            if(element){
                $scope.detail = element;
                $scope.results = null;
            }
        }
    }
}