//Strings part 2

function StringToArray(str){
	if (str.length == 0){
		return false;
	}
	var array = [];
	var temp ='';
	for (var i = 0; i <= str.length; i++){
		if(str[i] == ' ' || str[i]== undefined ){
			array.push(temp);
			temp = '';
		}else{
			temp += str[i];
		}
	}
	return array;
}



function CheckLength(str){
	var array = StringToArray(str);
		if (array == false){
			return false;
		}
	var longest = 0;
	for (var i = 1; i < array.length ; i++ ){
		if (array[longest].length < array[i].length){
			longest = i;
		}	
	}return array[longest];
}

function RevStr(str){
	var reStr = '';
	var temp ='';
	for(var i = 0; i <= str.length; i++){
		if(str[i] == ' ' || str[i]==undefined){
			if(reStr.length <1 ){
				reStr += temp;
				temp = '';
			}else{
				reStr = temp+ ' ' + reStr;
				temp = '';
			}
		} else {
			temp += str[i];
		}
	}
	return reStr;
}

console.log(RevStr('Hello This will be in reverse'));
console.log(CheckLength('Hello This will be in reverse'));

function findUnique (str){
	temp = '';
	reStr = '';
	myObj = {};
	for(var i = 0; i <= str.length; i++){
		if (str[i] == ' ' || str[i] == undefined){
			if(temp in myObj){
				myObj[temp] = myObj[temp] + 1;
			} else {
				myObj[temp] = 1;
			}temp = '';
		}else{
			temp += str[i];
		}
	} for (var key in myObj){
		if(myObj[key] == 1){
			reStr += ' ' + key;
		}
	}
	return reStr;
}

console.log(findUnique('this  a is a string of this'))