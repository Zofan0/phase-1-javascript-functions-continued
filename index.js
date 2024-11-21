// code your solution here
function saturdayFun(n) {
    var a = '';
    if (n) {
       a = n; 
    } else {
        a = 'roller-skate';
    }
    return 'This Saturday, I want to ' + a + '!';
}

function mondayWork(n) {
    var a = ''
    if (n) {
        a = n; 
     } else {
        a = 'go to the office';
     }
     return 'This Monday, I will ' + a + '.';
}

function wrapAdjective(n) {
    var a = ''
    if (n) {
        a = n; 
     } else {
         a = 'special';
     }
     return function (abc) {
        var b = ''
        if (abc) {
            b = abc; 
            } else {
                b = '*';
            }
        return "You are " + n +b + n+"!"; 
     }
}
