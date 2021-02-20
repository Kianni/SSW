const evaluator = require("./evaluator");

let runningModules = () => {
    let scale = [{ grade: 1, points: 20},{ grade: 2, points: 35},
        { grade: 3, points: 50},
        { grade: 4, points: 65},{ grade: 5, points: 80}];
    
    evaluator.setEvaluationScale(scale);
    let testingPoints = [15, 25, 40, 55, 70, 85, 20]
    for (let i = 0; i < 7; i++) {
        let result = evaluator.getGrade(testingPoints[i]);
        console.log("For points: " + 
                        testingPoints[i] + 
                        " the grade is: " + 
                        result);
    }
    
    return "OK!"        
}

runningModules();