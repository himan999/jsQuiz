var quiz = angular.module('jsQuiz',['ngRoute']);

quiz.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/start',{
		templateUrl : 'questions.html',
		controller : 'questionsCon1'
	}).
    when('/result', {
        templateUrl : 'result.html',
        controller : 'questionsCon1'
    });
}]);

quiz.controller('questionsCon',['$scope',function(scope){

	scope.jsQuizQ = [
        
        {
            id : 1,
			ques : "1. Inside which HTML element do we put the JavaScript?",
			options: ["1. <script>","2. <scripting>","3. <javascript>","4. <js>"],
			correctAns : 0,
            regAns : ''
		},
		
        {
            id:2,
			ques : "2. Where is the correct place to insert a JavaScript?",
			options: ["1. <head>","2. <body>","3. Both"],
			correctAns : 2,
            regAns : ''
		},
		
        {
            id: 3,
			ques : "3. How do you write 'Hello World' in an alert box?",
			options: ["1. msg(\"Hello World\");","2. alertBox(\"Hello World\");","3. msgBox(\"Hello World\");","4. alert(\"Hello World\");"],
			correctAns : 3,
            regAns : ''
		},
		
        {
            id:4,
			ques : "4. How do you round the number 7.25, to the nearest integer?",
			options: ["1. Math.round(7.25)","2. Math.rnd(7.25)","3. round(7.25)","4. rnd(7.25)"],
			correctAns : 0,
            regAns : ''
		},
		
        {
            id:5,
			ques : "5. How do you find the number with the highest value of x and y?",
			options: ["1. ceil(x, y)","2. Math.max(x, y)","3. top(x, y)","4. Math.ceil(x, y)"],
			correctAns : 1,
            regAns : ''
		},
		
        {
            id:6,
			ques : "6. What would be the output of console.log(p) if p is not defined?",
			options: ["1. Zero", "2. Null", "3. ReferenceError","4. Undefined"],
			correctAns : 2,
            regAns : ''
		},
		
        {
            id:7,
			ques : "7. Which best describes void?",
			options: ["1. Method","2. Function","3. Statement","4. Operator"],
			correctAns : 3,
            regAns : ''
		},
		
        {
            id:8,
			ques : "8. Which operator can be used to Join(concatenate) two strings and assign the joined string to the first operand?",
			options: ["1. &","2. +=","3. +","4. &&"],
			correctAns : 2,
            regAns : ''
		},
		
        {
            id:9,
			ques : "9. Which operator can be used to performs a zero-fill right-shift operation on two operands and assign the result to the first operand?",
			options: ["1. >>>=","2. >===","3. ==>>","4. =>>>"],
			correctAns : 0,
            regAns : ''
		},
		
        {
            id:10,
			ques : "10. JavaScript supports ______ important types of dialog boxes.",
			options: ["1. one","2. two","3. three","4. four"],
			correctAns : 2,
            regAns : ''
		}
        
	];
    scope.show = true;


}]);

quiz.controller('questionsCon1',['$scope',function(scope){
    var flag;
    scope.result = 0;
    scope.prevObj = [];
    scope.selectedIndex = [];
    scope.setAnswer = function(ele,obj,index) {  
        if(scope.prevObj.length < 1) {
            ele.currentTarget.className = "btn btn-success";
            obj.regAns = index;
            scope.prevObj.push({one:obj,two:ele.currentTarget});
            console.log(ele.currentTarget);
        } else if(isNotPrevObj(obj)) {
            ele.currentTarget.className = "btn btn-success";
            obj.regAns = index;
            scope.prevObj.push({one:obj,two:ele.currentTarget});
            console.log(ele.currentTarget);
        } else if(!isNotPrevObj(obj)){
            ele.currentTarget.className = "btn btn-success";
            obj.regAns = index;
            for(var j = 0; j < scope.prevObj.length; j++){
                if(scope.prevObj[j].one.id === obj.id) {
                    //update the object in the array
                    scope.prevObj[j].one = obj;
                    //change class of previous option
                    scope.prevObj[j].two.className = "btn btn-info";
                    //update the selected option in the array
                    scope.prevObj[j].two = ele.currentTarget;
                    console.log(scope.prevObj[j].two);
                }
            }
            console.log(obj);
            
        }
        
        function isNotPrevObj(objec) {
            for(var i=0; i <scope.prevObj.length; i++) {
                if(scope.prevObj[i].one.id === obj.id) {
                    return false;
                }
            }
            return true;
        }
        
        
    };
    
    scope.showResult = function() {
        scope.result = null;
        for(var i=0; i<scope.prevObj.length; i++) {
            if(scope.prevObj[i].one.correctAns === scope.prevObj[i].one.regAns) {
                scope.result += 10;
            }
        }   
        console.log(scope.result);
    }
    
}]);