

$('#btnid1').click(e => {

	var data= { "Type": "Coding", "Height":100 };
    var v1 = document.getElementById("textarea_in").value;
	if (v1 != "") {
        v1 = strToJson(v1);
        alert(v1);
	}   else{
		v1 =  data;
	} 

    var json = v1;//document.getElementById("textarea_in").value;
    var listStr = "";
    for( var key in json){
    	var value = json[key];
    	// print(key +  "  " + value);
    	var check = typeof(value);
    	if (check == "string") {

    	}else if(check == "number"){

    	}
    	listStr = listStr + "/* \n"
    	listStr = listStr + "*" + key + ":" + value + "\n"
    	listStr = listStr + "*/" + "\n"
    	listStr = listStr + "@property(nonatimic,copy)" + "NSString * " + key + "\n";
    	listStr = listStr + "\n";
    	// listStr = listStr +  check + " " +  key +":"  + value + "\n\n"
    }
    document.getElementById("textarea_out").value = listStr;
    copyToClipboard(listStr);

});


function strToJson(str){
    return JSON.parse(str);
}



function dealJson()
{
	/**
	基本类型：String、Number、Boolean、Symbol、Undefined、Null  引用类型：Object*/
	//
	var data= { "Type": "Coding", "Height":100 };
	var json = data;//document.getElementById("textarea_in").value;
	var listStr = "";
	for( var key in json){
		var value = json[key];
		// print(key +  "  " + value);
		var check = typeof(value);
		if (check == "string") {

		}else if(check == "number"){

		}
		listStr = listStr + "/* \n"
		listStr = listStr + "*" + key + ":" + value + "\n"
		listStr = listStr + "*/" + "\n"
		listStr = listStr + "@property(nonatimic,copy)" + "NSString * " + key + "\n";
		listStr = listStr + "\n";
		// listStr = listStr +  check + " " +  key +":"  + value + "\n\n"
	}
	document.getElementById("textarea_out").value = listStr;
	copyToClipboard(listStr);
	alert('copy Success');

}

function copyToClipboard(s){
	if (window.clipboardData) {
		window.clipboardData.setData('text',s);
	}else{
		(function(s){
			document.oncopy=function(e){
				e.clipboardData.setData('text',s);
				e.preventDefault();
				document.oncopy=null;
			}
		})(s);
		document.execCommand('Copy');
	}
}




