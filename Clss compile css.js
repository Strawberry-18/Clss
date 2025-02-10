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
