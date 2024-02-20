// This function tests a form for weak passwords
function testPasswordStrength(password) {
  var strength = 0;
  if (password.length >= 8) {
    strength++;
  }
  if (password.match(/[a-z]/)) {
    strength++;
  }
  if (password.match(/[A-Z]/)) {
    strength++;
  }
  if (password.match(/[0-9]/)) {
    strength++;
  }
  if (password.match(/[^a-zA-Z0-9]/)) {
    strength++;
  }
  return strength;
}

// This function tests a form for SQL injection vulnerabilities
function testSQLInjection(input) {
  var sqlInjection = false;
  if (input.match(/[';]/)) {
    sqlInjection = true;
  }
  return sqlInjection;
}

// This function tests a form for XSS vulnerabilities
function testXSS(input) {
  var xss = false;
  if (input.match(/[<>]/)) {
    xss = true;
  }
  return xss;
}

// Example usage:
var password = 'MyPassword123';
var passwordStrength = testPasswordStrength(password);
var sqlInjection = testSQLInjection(password);
var xss = testXSS(password);
console.log('Password strength:', passwordStrength);
console.log('SQL Injection:', sqlInjection);
console.log('XSS:', xss);
