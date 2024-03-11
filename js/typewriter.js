var theform;
var textfield;
var d3 = 0;
var d2 = 9;
var digits;

function insert (d1d0)
{
    // eval("textfield.value += \"\\u"+d3+d2+d1d0+"\"");
    eval("insertAtCursor(textfield,\"\\u"+d3+d2+d1d0+"\")");
    textfield.focus();

}

function insertAtCursor(myField, myValue)
{

  if (document.selection)
  {
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      sel.select();
  }

  else if (myField.selectionStart || myField.selectionStart == '0')
  {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      var newEndPos = startPos + myValue.length;
      myField.value = myField.value.substring(0, startPos)
                      + myValue
                      + myField.value.substring(endPos, myField.value.length);
      myField.setSelectionRange(newEndPos, newEndPos);
  }
  else
  {
      var newEndPos = myField.value.length + myValue.length;
      myField.value += myValue;
      myField.setSelectionRange(newEndPos, newEndPos);
  }
}

function initSection()
{
    var ctrl;
    for (var v1=0; v1 < 16; v1++)
    {
	d1=digits[v1];
	ctrl=(d3==0 && d2==0 && d1<=1);
	for (var v0=0; v0 < 16; v0++)
	{
	    d0=digits[v0];
	    if (!ctrl)
	    {
		eval("theform.c"+d1+d0+".value=\"\\u"+d3+d2+d1+d0+"\"");
	    }
	    else
	    {
		eval("theform.c"+d1+d0+".value=\"[]\"");
	    }
	}
    }
    textfield.focus();
}


function initSectionFromNumeric()
{
    d3=0;
    d2=9;
    initSection();
}

function initializeAssm()
{
    digits=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
    lcdigits=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
    theform = document.forms[0];
    textfield = theform.inputField;
    htmlfield = theform.html;
    initSectionFromNumeric();
}

function insertConj(myValue)
{
  var myField = textfield;
  myField.style.fontFamily = 'Arial';
  myField.style.fontSize = '2.4em';
  if (document.selection)
  {
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      sel.select();
  }

  else if (myField.selectionStart || myField.selectionStart == '0')
  {

      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      var newEndPos = startPos + myValue.length;
      myField.value = myField.value.substring(0, startPos)
                      + myValue
                      + myField.value.substring(endPos, myField.value.length);
      myField.setSelectionRange(newEndPos, newEndPos);
  }
  else
  {

      var newEndPos = myField.value.length + myValue.length;
      myField.value += myValue;
      myField.setSelectionRange(newEndPos, newEndPos);
  }
  textfield.focus();
}

function onPressBackspace() {
	var myField = textfield;
	textfield.focus();
    myField.value = myField.value.substring(0, myField.value.length - 1);
}