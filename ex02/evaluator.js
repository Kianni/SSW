let scale = [];

const setEvaluationScale = (ascale) => {
    scale = ascale;
};
const getGrade = (points) => {
    let grade;
    if(!scale) {
        return 'There is no evaluation scale defined.';
    }
    if(points < scale[0].points) {
        grade = 0;
    } else {
    // do not iterate through the whole scale
    // take the first fitting
        let i = 0;
        while (!grade){            
            if (scale[i+1]){
                if (points >= scale[i].points 
                    && points < scale[i+1].points) {                    
                    grade = scale[i].grade;
                }
            } else {
                grade = scale[i].grade;
            }            
            i++;
        };
    }   

    return grade;
};
module.exports.setEvaluationScale = setEvaluationScale;
module.exports.getGrade = getGrade;