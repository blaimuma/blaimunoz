const textarea = document.createElement('textarea');
textarea.value = "blaimuma22@gmailcom";
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
document.body.removeChild(textarea);
alert('Text copied to clipboard!');