# Clss code using       
<div align="center">
  <img src="https://github.com/Strawberry-18/Clss/raw/refs/heads/main/file-X1gLGrvDLRYh1hVcbEqnqH.webp" style="width: 65%">
</div>

___
[clss create by - surya](www.stawberry.com)
>how to use clss

### example
~~~
    <div id="app">
        <div class="box" data-class="bg-red-1 text-white p-4 rounded">Red Box</div>
            <div data-class="h-10vh bg-black-1 m-2 rounded-lg sh-sm"></div>
    <div data-class="cle-g-6rem  fixed"></div>
    </div>
~~~

___
## html example code
```
<!DOCTYPE html>
<html lang="ta">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JLT Compiler - JSON CSS Example</title>
</head>
<body>

    <div id="app">
        <div class="box" data-class="bg-red-200 text-gray- 200 border-b-1 p-4 rounded-xl">Red Box</div>
    </div>

<script>
    // JSON-ல் இருந்து CSS Properties Apply செய்யும் Function
    fetch("https://raw.githubusercontent.com/Strawberry-18/Clss/refs/heads/main/Clss%20all%20communication.json")
        .then(response => response.json())
        .then(cssRules => {
            document.querySelectorAll("[data-class]").forEach(el => {
                const classes = el.getAttribute("data-class").split(" ");
                let styleString = "";

                classes.forEach(cls => {
                    Object.values(cssRules).forEach(category => {
                        if (category[cls]) {
                            styleString += category[cls] + "; ";
                        }
                    });
                });

                el.style = styleString;
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
</script>

</body>
</html>
```
output page 
>this clone

<image src="https://raw.githubusercontent.com/Strawberry-18/Clss/refs/heads/main/.github/workflows/Screenshot_2025-02-10-12-34-21-390_com.foxdebug.acode-edit.jpg">
