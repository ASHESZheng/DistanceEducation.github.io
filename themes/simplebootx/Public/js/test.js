function getOBID(ID)
{
	return document.getElementById(ID)||document[ID];
}
function getMonoRight(obj)
{
	for(var i=0;i<obj.radiobutton.length;i++)
	{
		obj.radiobutton[i].disabled = true;
	}
	for(var i=0;i<obj.radiobutton.length;i++)
	{
		if(obj.radiobutton[i].checked ==true)
		{
			return i+1;
			break;
		}
	}
	return "0";
}
function getMultRight(obj)
{
	var tempA="";
	for(var i=0;i<obj.radiobutton.length;i++)
	{
		obj.radiobutton[i].disabled = true;
		if(obj.radiobutton[i].checked ==true)
		{
			tempA +=String(i+1);
		}
	}
	if(tempA.length!="") return tempA
	else	return "0";
}
function getPic(ID)
{
	for(var i=0;i<getOBID("f"+ID+"ctl").childNodes.length;i++)
	{
		if(getOBID("f"+ID+"ctl").childNodes[i].tagName == "span" || getOBID("f"+ID+"ctl").childNodes[i].tagName=="SPAN")
		{
			return getOBID("f"+ID+"ctl").childNodes[i].childNodes[0];
			break;
		}
	}
}
function setPic(ID,bool)
{

	if(getOBID("f"+ID+"ctl") && bool==true)
	{
		getPic(ID).src = "/article-imager/right.gif";
	}
	else
	{
		getPic(ID).src = "/article-imager/wrong.gif";
	}
	var tempO = getOBID("f"+ID+"ctl").firstChild;
}
function check(ID)
{
	//此处ID为1开始
	var tempO;
	var tempF;
	if(getOBID("f"+ID+"ctl"))
	{
		tempO = getOBID("f"+ID+"ctl");
		tempO.style.display = "block";
	}
	else return;
	//MONOchoice																																																																						
	if(getOBID("f"+ID) && getOBID("f"+ID).getAttribute("cls") == "mono")
	{
		tempF = getOBID("f"+ID);
		if(getMonoRight(tempF) == tempF.getAttribute("rightA"))
		{
			setPic(ID,true);
			rightNum++;
		}
		else
		{
			setPic(ID,false);
		}
	}
	//MULTYchoice
	else if(getOBID("f"+ID) && getOBID("f"+ID).getAttribute("cls") == "mult")
	{
		tempF = getOBID("f"+ID);
		if(getMultRight(tempF) == tempF.getAttribute("rightA"))
		{
			setPic(ID,true);
			rightNum++;
		}
		else
		{
			setPic(ID,false);
		}
	}
}
function preGrade()
{
	if(checked)
	{
		document.getElementById('bookmarkTable').style.display='block';
		/*document.getElementById('bookmarkTable').style.top = document.body.scrollHeight-0+"px";*/
		document.getElementById('info1').style.display='block';
		document.getElementById('info2').style.display='none';
	}
	else
	{
		document.getElementById('bookmarkTable').style.display='block';
		/*document.getElementById('bookmarkTable').style.top = document.body.scrollHeight-0+"px";*/
		document.getElementById('info1').style.display='none';
		document.getElementById('info2').style.display='none';
	}
	
}

function grade()
{
	checked = true;
	for(var i=0;i<totalQ;i++)
	{
		if(getOBID("f"+String(i+1)+"ctl"))
		{
			tempID = i;
			check(String(i+1));
			if(i==totalQ-1)
			{
				reportScore();
				scroll(0,document.body.scrollHeight);
			}
		}
	}
	for(var ii=0;ii<totalW;ii++)
	{
		eval("e"+(ii+1)+"ra").style.display="block";
	}
	
}
function reportScore()
{
	document.getElementById('bookmarkTable').style.display='block';
	/*document.getElementById('bookmarkTable').style.top = document.body.scrollHeight-0+"px";*/
	document.getElementById('info2').style.display='block';
	document.getElementById('info1').style.display='none';
	document.getElementById('scoreBox').innerHTML=parseInt(rightNum/totalQ*100);
	
}
//答案、点评控制
function showChoice(bt)
{
	var tID;
	var pID;
	var tempString="";
	if(bt.parentNode.id) pID = bt.parentNode.id
	else return;
	//
	if(pID.indexOf("f")>=0) tempString = "f";
	else if(pID.indexOf("e")>=0) tempString = "e";
	//
	tID = pID.substring(pID.indexOf(tempString)+1,pID.indexOf("c"));
	if(getOBID(tempString+tID+"ra"))	getOBID(tempString+tID+"ra").style.display='block';
	if(getOBID(tempString+tID+"dp"))	getOBID(tempString+tID+"dp").style.display='none';
	parent.resizea();parent.parent.resize();
}

function showDp(bt)
{
	var tID;
	var pID;
	var tempString;
	if(bt.parentNode.id) pID = bt.parentNode.id
	else return;
	//
	if(pID.indexOf("f")>=0) tempString = "f";
	else if(pID.indexOf("e")>=0) tempString = "e";
	//
	tID = pID.substring(pID.indexOf(tempString)+1,pID.indexOf("c"));
	if(getOBID(tempString+tID+"dp"))	getOBID(tempString+tID+"dp").style.display='block';
	if(getOBID(tempString+tID+"ra"))	getOBID(tempString+tID+"ra").style.display='none';
}


/*第二层题*/
function grades()
{
	checked = true;
	for(var i=0;i<totalQ;i++)
	{
		if(getOBID("f"+String(i+1)+"ctl"))
		{
			tempID = i;
			checks(String(i+1));
			if(i==totalQ-1)
			{
				reportScore();
				scroll(0,document.body.scrollHeight);
			}
		}
	}
	for(var ii=0;ii<totalW;ii++)
	{
		eval("e"+(ii+1)+"ra").style.display="block";
	}
	
}
function checks(ID)
{
	//此处ID为1开始
	var tempO;
	var tempF;
	if(getOBID("f"+ID+"ctl"))
	{
		tempO = getOBID("f"+ID+"ctl");
		tempO.style.display = "block";
	}
	else return;
	//MONOchoice																																																																						
	if(getOBID("f"+ID) && getOBID("f"+ID).getAttribute("cls") == "mono")
	{
		tempF = getOBID("f"+ID);
		if(getMonoRight(tempF) == tempF.getAttribute("rightA"))
		{
			setPics(ID,true);
			rightNum++;
		}
		else
		{
			setPics(ID,false);
		}
	}
	//MULTYchoice
	else if(getOBID("f"+ID) && getOBID("f"+ID).getAttribute("cls") == "mult")
	{
		tempF = getOBID("f"+ID);
		if(getMultRight(tempF) == tempF.getAttribute("rightA"))
		{
			setPics(ID,true);
			rightNum++;
		}
		else
		{
			setPics(ID,false);
		}
	}
}
function setPics(ID,bool)
{

	if(getOBID("f"+ID+"ctl") && bool==true)
	{
		getPic(ID).src = "/article-imager/right.gif";
	}
	else
	{
		getPic(ID).src = "/article-imager/wrong.gif";
	}
	var tempO = getOBID("f"+ID+"ctl").firstChild;
}
/*第二层题*/