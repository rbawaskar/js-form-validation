/****************************************************************************

	Copyright(c) 2009, Ravindra Bawaskar
	All rights reserved.

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

***************************************************************************/

function addValidate() {
	var forms = document.getElementsByTagName("FORM");
	for( var i=0; i<forms.length; i++)
	{
		forms[i].onsubmit = validateForm;
	}
};

function validateForm() 
{
	var obj = this;
	var returnFlag = true;
	for (var formElementsCount=0;formElementsCount<obj.elements.length; formElementsCount++)
	{
		var formElement = obj.elements[formElementsCount];
		if (formElement.getAttribute('v')) {
			var method = formElement.getAttribute('v');
			var func = method+'("'+formElement.id+'")';
			var response = eval("("+func+")");
			if(response!==true)
			{
				returnFlag = false;
				showError(formElement, response);
			}
			else
			{
				hideError(formElement);
			}
		}
	}
	return returnFlag;
};

function email(id)
{
		var str = document.getElementById(id).value;
	if (str.length==0)
		return "cannot be blank";
	var filter = /^((([a-z]|[A-Z]|[0-9]|\-|_)+(\.([a-z]|[A-Z]|[0-9]|\-|_)+)*)@((((([a-z]|[A-Z]|[0-9])([a-z]|[A-Z]|[0-9]|\-){0,61}([a-z]|[A-Z]|[0-9])\.))*([a-z]|[A-Z]|[0-9])([a-z]|[A-Z]|[0-9]|\-){0,61}([a-z]|[A-Z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/
	if (!filter.test(str))
		return "invalid email address"

	return true;
}

function str(id)
{
	var ele = document.getElementById(id);
	var c = ele.hasAttribute("c") ? ele.getAttribute("c") : "";
	if(ele.value.length == 0)
		return c + " cannot be blank";
	if(ele.hasAttribute("mi") && ele.value.length < ele.getAttribute("mi"))
		return "min "+ele.getAttribute("mi") + " chars required";
	if(ele.hasAttribute("mx") && ele.value.length > ele.getAttribute("mx"))
		return "cannot exceed " + ele.getAttribute("mx") + " chars";
	return true;
}

function int(id)
{
	var ele = document.getElementById(id);
	if (isNaN (ele.value))
		return "only numeric value allowed";
	return str(id);
}

function file(id)
{
	var ele = document.getElementById(id);
	if (ele.value.length == 0)
		return "select file to upload"
	return true;
}
function showError(ele, response)
{
	hideError(ele);
	var errorspan = document.createElement("SPAN");
	errorspan.innerHTML = response;
	errorspan.className = "error";
	errorspan.style.color = "red";
	appendAfter(ele, errorspan);
}

function hideError(ele)
{
	var errorspan = ele.nextSibling;
	if (!errorspan)
		return;
	if (errorspan.className = "error")
		ele.parentNode.removeChild(errorspan);
}

function appendAfter(obj,node) 
{
	if (obj.nextSibling)
		obj.parentNode.insertBefore(node,obj.nextSibling);
	else
		obj.parentNode.appendChild(node);
}
addValidate();
