
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } 
      return "Not Found";
    }
  
    /** функция проверки свой-сва в объекте */