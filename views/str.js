
var s = ['a','b','c','d','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var s = copy;

function next(str) {
	var last = my_car.charAt(str.length);
	if (last == 'z') {
		return(str + 'a');
	}
	else {
		newc = String.fromCharCode(last.charCodeAt()+1);	
	}
	str[str.length] = newc;
}
