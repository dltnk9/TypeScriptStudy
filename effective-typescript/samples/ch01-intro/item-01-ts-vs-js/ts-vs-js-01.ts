function greet(who: string) {
  console.log('Hello', who);
}

greet('jn')

// directory allow mark - > this happens because there is a .git file in the directory

// 1. delete .git file on that specific folder
// git rm --cached .rf    - delete staging files
// and then  add- commit -push

// if you upload your node module by mistake:
// firstly create .gitignore
// git rm -r --cached .
// git add .
// git commit -m "remove gitignore files":
// git push 