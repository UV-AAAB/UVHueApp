import { element } from 'protractor';
import { puts } from 'util';

export function execute() {
    if(document.querySelector("app-tab1")) {
        let groupNumber;
        let groupname = "UV AAAB";
        GETGroupInfo();
        let pushButton = document.querySelector('.choicewrapper');

        pushButton.addEventListener('click', (e) => {
            let choice = document.querySelectorAll('.button-on');
            choice.forEach(element => {
                if(element != e.target || e.target.parentNode){
                    element.classList.remove('button-on')
                }
            })

            if(e.target.classList.contains('button') || e.target.parentNode.classList.contains('button')){
                e.target.classList.toggle('button-on');
            }
            let funcarr = [
                {a: "FocusButton", b: FocusButton}, 
                {a: "TeachButton", b: TeachButton}, 
                {a: "ProjectorButton", b: ProjectorButton}, 
                {a: "CreativeButton", b: CreativeButton}
            ]
            
            pushButton.childNodes.forEach(element => {
                if(element.classList.contains('button-on')){
                    let status = element.innerText;   
                    funcarr.forEach(object => {
                        if(object.a == status){
                            object.b()
                        }
                    })
                }
            })
        
        }) //eventlistener

        function FocusButton() {
            fetch(`http://192.168.8.100/api/4lIQDtPyXMDt9Zjfnjf4FcFffWTRYRg9U71eWuP0/groups/${groupNumber}/action`,{
                method: "PUT",
                body: JSON.stringify({on:true, sat:254, bri:154, hue:10000})
            })
            .then(Response => Response.json())
            .then(data => {
                console.log('Focus')
            })
        }
        
        function TeachButton() {
            fetch(`http://192.168.8.100/api/4lIQDtPyXMDt9Zjfnjf4FcFffWTRYRg9U71eWuP0/groups/${groupNumber}/action`,{
                method: "PUT",
                body: JSON.stringify({on:true, sat:130, bri:154, hue:1700})
            })
            .then(Response => Response.json())
            .then(data => {
                console.log('Teach')
            })
        }

        function ProjectorButton() {
            fetch(`http://192.168.8.100/api/4lIQDtPyXMDt9Zjfnjf4FcFffWTRYRg9U71eWuP0/groups/${groupNumber}/action`,{
                method: "PUT",
                body: JSON.stringify({on:true, sat:200, bri:25, hue:500})
            })
            .then(Response => Response.json())
            .then(data => {
                console.log('Projector')
            })
        }

        function CreativeButton() {
            fetch(`http://192.168.8.100/api/4lIQDtPyXMDt9Zjfnjf4FcFffWTRYRg9U71eWuP0/groups/${groupNumber}/action`,{
                method: "PUT",
                body: JSON.stringify({on:true, sat:254, bri:154, hue:36000})
            })
            .then(Response => Response.json())
            .then(data => {
                console.log('Creative')
            })
        }

        async function GETGroupInfo() {
            await fetch("http://192.168.8.100/api/4lIQDtPyXMDt9Zjfnjf4FcFffWTRYRg9U71eWuP0/",{
                method: "GET",
            })
            .then(Response => Response.json())
            .then(data => {
        
                let result = Object.entries(data.groups);

                result.forEach(group => {
                    if(group[1].name === groupname){
                        let lightsetting = group[1].action;
                        groupNumber = group[0]
                        console.log(lightsetting)
                    }
                });
            
            })
               
        } 

    }
}