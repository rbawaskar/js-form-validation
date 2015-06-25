Most of the available libraries for validation are either too complex to use or too heavy to load in pages. This project is minimalistic javascript validation framework, which provides core methods to validate a form elements.

It can be very well and easily extended/customized as per use. There is absolutely no javascript coding is required, this framework identifies the forms and adds validation checks automatically.

A simple example usage :

Include the js-form-validation libaray :
```
<script type="text/javascript" src="http://js-form-validation.googlecode.com/svn/trunk/validate.js"></script>
```

Basic login form validation :
```
<form name="login-form" method="post" action="/login">
	<div class="row">
		<div class="fl">Email</div>
		<div class="flb"><input name="email" id="lemail" v="email" type="text"></div>
	</div>
	<br clear="all">

	<div class="row">
		<div class="fl">Password</div>
		<div class="flb"><input name="password" id="lpass" v="str" mi="6" c="password" type="password"></div>
	</div>
	<br clear="all">
	<input name="type" value="login" type="hidden">
	<div class="row" style="text-align: center;">
		<input value="Login" type="submit">

	</div>
</form>
```