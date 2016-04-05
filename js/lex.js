String.prototype.findNum = function(){
	return this.match(/\d+/g);
}

function s(obj){
	return document.getElementById(obj);
}
function view(){
	return {
		w:document.documentElement.clientWidth,
		h:document.documentElement.clientHeight
	};
}
function getByClass(parent,tagname,classname){
	var aEls = parent.getElementsByTagName(tagname);
	var arr = [];
	var re = new RegExp('(^|\\s)' + classname + '(\\s|$)');
	for(var i=0;i<aEls.length;i++){
		if(re.test(aEls[i].className)){
			arr.push(aEls[i]);
		}
	}
	return arr;
}

function addClass(obj,sClass){
	var aClass = obj.className.split(' ');
	if(!obj.className){
		obj.className = sClass;
		return;
	}
	for(var i = 0;i<aClass.length;i++){
		if(aClass[i] === sClass) return;
	}
	obj.className += ' ' + sClass;
}
function bind(obj,ev,fn){
	if(obj.addEventListener){
		obj.addEventListener(ev,fn,false);
	}else{
		obj.attachEvent('on' + ev,function(){
			fn.call(obj);
		} )
	}
}

function removeClass(obj,sClass){
	var aClass = obj.className.split(' ');
	if(!obj.className)return;
	for(var i = 0;i < aClass.length;i++){
		if(aClass[i] === sClass){
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
			break;
		}
	}
}

function random(option){
	var min = option.min || 0;
	var max = option.max;
	var iNum = min + Math.round(Math.random() * (max - min));
	if(iNum < min){iNum = min;}
	return iNum;
}