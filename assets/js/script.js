document.addEventListener("DOMContentLoaded", function () {
    var consoleText = document.querySelector(".console");
    var consoleText2 = document.querySelector(".console-2");
    var menuItems = document.querySelectorAll(".menu-item");

    consoleText.addEventListener("animationend", function () {
        var directoryStructure = `
        Punkdev@github.io:~$ tree

        ├── home
        │   ├──index.html
        │   ├── Blog.html
        │   ├── Plataformas
        │       ├── HackmyVM.html
        │       ├── Tryhackme.html
        │       ├── vulnhub.html
        │       ├── Hackthebox.html   
        ├── LINUX
        │     ├── book.html
        ├── PYTHON
        │     ├── book.html
        ├── usr
        │    ├── Sobre mi
        │    ├── cv.html
        Punkdev@github.io:~$ cd Blog.html`;
        typeMessage(directoryStructure, 0, consoleText, function () {
            menuItems.forEach(function (item, index) {
                item.style.animationDelay = (index * 0.5) + "s";
                item.style.display = "inline-block";
            });
            // Redireccionar a una página después de que termine la animación
            setTimeout(function () {
                window.location.href = "/Blog.html";
            }, 1000);
        });
    });

    function typeMessage(message, index, element, callback) {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            setTimeout(function () {
                typeMessage(message, index, element, callback);
            }, 30);
        } else {
            callback();
        }
    }
});