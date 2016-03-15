//funçao que executara o controller
myApp.controller('FormCtrl', function( $scope ){

	$scope.indexTarefa = 0;
	$scope.clicouEditar = false;


	/*console.log('FormCtrl Funcionando!');*/
	$scope.pessoa = {
		name : 'Tiago',
		lastname : 'Albuquerque',
		age : 26,
		email : 'tiago@gmail.com',
		phone : 99735231
	}

	$scope.list = [
		{
			nomeTarefa : 'Tarefa Teste',
			dataTarefa : '2016-03-15T08:06:59.149Z'	

		},
		{
			nomeTarefa : 'Limpar a casa',
			dataTarefa : '2016-03-15T08:06:59.149Z'		
		}
	
	];

	///* Funcão para cadastrar uma nova tarefa*/
	/*$scope.cadastraTarefa = cadastraTarefa(); pode ser feito assim*/
	$scope.cadastraTarefa = function( data ){
		/*if entende que data nao tem informaçao e nao cadastra*/
		if (data){

			$scope.list.push({
				nomeTarefa : data,
				dataTarefa : new Date().getTime()			
			});

			$scope.tarefa = undefined;
		};
	};

	// Função para editar uma tarefa
	$scope.editaTarefa = function( dataIndex ){
		$scope.clicouEditar = true;
		$scope.indexTarefa = dataIndex;
		$scope.renomear = $scope.list[dataIndex].nomeTarefa
	};

	// Função para o botão renomear
	$scope.renomearTarefa = function( dataNV ){
		var editObj = {};
		editObj = {
			'nomeTarefa' : dataNV,
			'dataTarefa' : $scope.list[$scope.indexTarefa].dataTarefa
		}

		$scope.list[$scope.indexTarefa] = editObj;

		$scope.clicouEditar = false;
	}

});