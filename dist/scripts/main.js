const header=document.querySelector("header"),hero=document.querySelector(".hero");window.addEventListener("scroll",()=>{var e=hero.offsetHeight;window.scrollY>e?header.classList.add("header--active"):header.classList.remove("header--active")});