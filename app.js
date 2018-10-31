let collectedText;
const html = document.querySelectorAll('html');
for(let i = 0; i < html.length; i++){
    collectedText += html[i].innerText;
}  
collectedText = collectedText.replace('undefined', '');
let newStr = JSON.stringify(collectedText);
newStr = newStr.substring(0, newStr.length-1);
newStr = newStr.substring(1);
let texty = newStr.split('\\n');
Array.prototype.remove = function() {
    let what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
texty = texty.remove('\\t');
texty = texty.remove(' ');
texty = texty.filter(Boolean);
var keys = [];
for (let i = 0; i < texty.length; i++){
keys[i] = 'textNode'+i;
}
let arrayOfObjecs = {};
for(let i = 0; i < keys.length; i++ ){
        arrayOfObjecs[keys[i]]=texty[i];      
}
const finalJSON = JSON.stringify(arrayOfObjecs);

const download = (content, fileName, contentType) => {
    let a = document.createElement("a");
    let file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(finalJSON, 'textFromPage.json', 'application/json');
