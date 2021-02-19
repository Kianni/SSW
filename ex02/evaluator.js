let scale;

const setEvalScale = (ascale) => {
    scale = ascale;
};

const getGrade = (points) => {

    let grade = 0;

    if(!scale) {
        return 'There is no evaluation scale defined.';
    }

    for (let i=0; i< scale.length; i++){

        if (points >= scale[i].points) {
            grade = scale[i].grade;
        }
    };

    return grade;
};

module.exports.setEvalScale = setEvalScale;
module.exports.getGrade = getGrade;