import { puts } from 'util';

export function execute() {

    let settingchange = document.querySelector(".individual__setting")







    var currentTheme = localStorage.getItem("currentTheme");
    document.documentElement.setAttribute("data-theme", currentTheme);








    settingchange.addEventListener("click", change)


    function change(e) {


        e.target.classList.toggle("white__bg");
        console.log(localStorage)

        fetch("http://192.168.8.100/api/4lIQDtPyXMDt9Zjfnjf4FcFffWTRYRg9U71eWuP0/lights/6/state", {
            method: "PUT",
            body: JSON.stringify({ on: true, sat: 254, bri: 154, hue: 10000 })
        })
            .then(Response => Response.json())
            .then(light => {
                console.log(light)
            })




        if (localStorage.getItem("1") === ".white__bg") {
            localStorage.setItem("1", ".individual__setting_Recess")
        }
        else {
            localStorage.setItem("1", ".white__bg");
        }

    }

    const list = document.querySelectorAll(".individual__setting p")
    console.log(list)




    // Light variables




}
