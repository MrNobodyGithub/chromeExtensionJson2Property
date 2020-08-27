

 
$('#btnHandyJSON').click(e => {

	var data= { "type": "Coding", "height":100 };
    var v1 = document.getElementById("textarea_in").value;
	if (v1 != "") {
        v1 = strToJson(v1);
        alert("SwiftyJSON success");
	}   else{
		v1 =  data;
	} 

    var json = v1;//document.getElementById("textarea_in").value;
    var listStr = "";
    var charType = "String"
    for( var key in json){
    	var value = json[key];
    	// print(key +  "  " + value);
    	var check = typeof(value);
    	if (check == "string") {
    		charType = "String"
    	}else if(check == "number"){
    		charType = "Int"

    	} 
    	listStr = listStr + "var " + key + ":" + charType+"?" + "\n" 
    }
    listStr = listStr + "required init(){}\n"
 

    document.getElementById("textarea_out").value = listStr;
    copyToClipboard(listStr);

});


$('#btnObjectMapper').click(e => {

	var data= { "type": "Coding", "height":100 };
    var v1 = document.getElementById("textarea_in").value;
	if (v1 != "") {
        v1 = strToJson(v1);
        alert("SwiftyJSON success");
	}   else{
		v1 =  data;
	} 

    var json = v1;//document.getElementById("textarea_in").value;
    var listStr = "";
    var charType = "String"
    for( var key in json){
    	var value = json[key];
    	// print(key +  "  " + value);
    	var check = typeof(value);
    	if (check == "string") {
    		charType = "String"
    	}else if(check == "number"){
    		charType = "Int"

    	} 
    	listStr = listStr + "var " + key + ":" + charType+"?" + "\n" 
    }
    listStr = listStr + "\n"

    listStr = listStr + "init?(map:Map){" + "\n"
    listStr = listStr + "}\n"

    listStr = listStr + "mutating func mappint(map:Map){ \n"
    for( var key in json){
    	var value = json[key]; 
    	listStr = listStr + "    "+key + "  <- map[\""+ key + "\"]\n"  
   
    }
    listStr = listStr + "} \n"


    document.getElementById("textarea_out").value = listStr;
    copyToClipboard(listStr);

});

$('#btnSwiftyJson').click(e => {

	var data= { "type": "Coding", "height":100 };
    var v1 = document.getElementById("textarea_in").value;
	if (v1 != "") {
        v1 = strToJson(v1);
        alert("SwiftyJSON success");
	}   else{
		v1 =  data;
	} 

    var json = v1;//document.getElementById("textarea_in").value;
    var listStr = "";
    var charType = "String"
    for( var key in json){
    	var value = json[key];
    	// print(key +  "  " + value);
    	var check = typeof(value);
    	if (check == "string") {
    		charType = "String"
    	}else if(check == "number"){
    		charType = "Int"

    	} 
    	listStr = listStr + "var " + key + ":" + charType+"?" + "\n" 
    }
    listStr = listStr + "\n"
    listStr = listStr + "init(_ jsonData:JSON){ \n"
    for( var key in json){
    	var value = json[key]; 
    	var check = typeof(value);
    	if (check == "string") {
    		charType = "stringValue"
    	}else if(check == "number"){
    		charType = "intValue"

    	} 
    	listStr = listStr + "    "+key + " = jsonData[\""+ key + "\"]." + charType +" \n"
   
    }
    listStr = listStr + "} \n"


    document.getElementById("textarea_out").value = listStr;
    copyToClipboard(listStr);

});

$('#btnid1').click(e => {

	var data= { "Type": "Coding", "Height":100 };
    var v1 = document.getElementById("textarea_in").value;
	if (v1 != "") {
        v1 = strToJson(v1);
        alert("oc success");
	}   else{
		v1 =  data;
	} 

    var json = v1;//document.getElementById("textarea_in").value;
    var listStr = "";
    var charType = "NSString"
    var refType = "copy"
    for( var key in json){
    	var value = json[key];
    	// print(key +  "  " + value);
    	var check = typeof(value);
    	if (check == "string") {
    		charType = "NSString * "
    		refType = "copy"
    	}else if(check == "number"){
    		charType = "Int "
    		refType = "assign"
    	}
    	listStr = listStr + "/* \n"
    	listStr = listStr + "*" + key + ":" + value + "\n"
    	listStr = listStr + "*/" + "\n"
    	listStr = listStr + "@property(nonatimic,"+ refType+ ")" + charType + key + ";\n";
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




