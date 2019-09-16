angular.module('site', []);
angular.module('site').controller('siteCtrl', ($scope) =>{
    $scope.tarefas = [];

    $scope.salvar = (tarefa) => {     
        let t = JSON.parse(localStorage.getItem('tarefas'));
        tarefa['id'] = t.length;
        t.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(t));
        delete $scope.tarefa;

        carregar();
    };
    $scope.alterar = (t, status) => {
        let parcial = t;

        let lista = JSON.parse(localStorage.getItem('tarefas'));
        for(let  i = 0; i < lista.length; i++){
            if (parcial['id'] == i){
                lista[i]['checked'] = !status;                
            }            
        }    
        localStorage.setItem('tarefas', JSON.stringify(lista));
    };
    $scope.estrelar = (t, statusEstrela) => {
        let parcial = t;
        
        let lista = JSON.parse(localStorage.getItem('tarefas'));
        for(let  i = 0; i < lista.length; i++){
            if (parcial['id'] == i){
                lista[i]['star'] = !statusEstrela;                
            }            
        }    
        localStorage.setItem('tarefas', JSON.stringify(lista));
    };

    let carregar = () => {
        $scope.tarefas = JSON.parse(localStorage.getItem('tarefas'));
        if($scope.tarefas == null){
            localStorage.setItem('tarefas',  JSON.stringify([]));
        }
    };
    carregar();
});