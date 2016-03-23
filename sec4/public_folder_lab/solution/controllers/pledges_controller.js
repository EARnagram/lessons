(function() {
  "use strict";

  angular
      .module("rokoApp")
      .controller("PledgesController", PledgesController);

  PledgesController.$inject = ["$state", "userDataService", "$log", "$http"];

  function PledgesController($state, userDataService, $log, $http) {
    var vm = this;

    vm.user = userDataService;

    vm.pledges = [];

    vm.newPledge = {
      content: "",
      category: ""
    };

    vm.editPledge = {
      content: "",
      category: ""
    }

    vm.getPledges   = getPledges;
    vm.deletePledge  = deletePledge;
    vm.updatePledge  = updatePledge;
    vm.postPledge    = postPledge;
    vm.resetEditForm = resetEditForm;

    vm.getPledges();

    function getPledges() {
      $http.get('http://localhost:3000/api/pledges').then(function(response) {
        vm.pledges = response.data;
      }, function(errRes) {
        console.error('Error catchin pledge!', errRes);
      });
    }

    function deletePledge(id) {
      $http.delete('http://localhost:3000/api/pledges/' + id).then(function(response) {
        console.log(response);
      }, function(errRes) {
        console.error('Error deletin pledge!', errRes);
      }).then(getPledges);
    }

    function postPledge() {
      $http.post('http://localhost:3000/api/pledges', vm.newPledge)
        .then(getPledges)
        .then(function(response) {
          vm.newPledge = {
            content: "",
            category: ""
          };
        });
    }

    function updatePledge(id) {
      $http.put('http://localhost:3000/api/pledges/' + id, vm.editPledge).then(function(response) {
        vm.editPledge = {
          content: "",
          category: ""
        };
      }, function(errRes) {
        console.log('Error fixin pledge!', errRes);
      }).then(getPledges);
    }

    function resetEditForm() {
      vm.pledgeCategory = '';
      vm.pledgeName = '';
      vm.editPledge = {
        content: "",
        category: ""
      };
    }

  }

})();
