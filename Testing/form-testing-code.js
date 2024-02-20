// This function tests a form for missing fields
function testForm(form) {
  var missingFields = [];
  var inputs = form.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      missingFields.push(inputs[i].name);
    }
  }
  return missingFields;
}

// This function tests a form for SQL injection vulnerabilities
function testFormSQLInjection(form) {
  var sqlInjectionFields = [];
  var inputs = form.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.match(/[';]/)) {
      sqlInjectionFields.push(inputs[i].name);
    }
  }
  return sqlInjectionFields;
}

// This function tests a form for XSS vulnerabilities
function testFormXSS(form) {
  var xssFields = [];
  var inputs = form.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.match(/[<>]/)) {
      xssFields.push(inputs[i].name);
    }
  }
  return xssFields;
}

// Example usage:
var myForm = document.getElementById('myForm');
var missingFields = testForm(myForm);
var sqlInjectionFields = testFormSQLInjection(myForm);
var xssFields = testFormXSS(myForm);
console.log('Missing fields:', missingFields);
console.log('SQL Injection fields:', sqlInjectionFields);
console.log('XSS fields:', xssFields);
