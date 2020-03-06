export function execute() {
    if(document.querySelector("app-tab1")) {
        let myWheel = document.querySelector(".masterwheel")
        console.log(myWheel);

                // Variables
                var x = 0, y = 0;
                var radius = 150;
                var circleInitX = 147;
                var circleInitY = 140;
                // Actual dial
                document.getElementById("slider").style.left = circleInitX + "px";
                document.getElementById("slider").style.top = circleInitY-radius+"px";
                // Function get angle
                function getAngle(x, y) {
                    return Math.atan(y / x)*(180/Math.PI);
                }
                // Draging start event
                myWheel.addEventListener('dragstart', function(event) {
                    document.addEventListener('drag', move);
                    document.addEventListener('dragend', release);
                });
                // Move event
                function move(event) {
                    // Function to get offset sum
                    function getOffsetSum(elem) {
                        var top = 0, left = 0;
                        while (elem) {
                            top = top + parseInt(elem.offsetTop);
                            left = left + parseInt(elem.offsetLeft);
                            elem = elem.offsetParent;
                        }
                        return {top: top, left: left};
                    }
                    var parentOffset = getOffsetSum(document.getElementById("rotate-this"));
                    y = event.gesture.center.pageY;
                    x = event.gesture.center.pageX;
                    var center = {x: parentOffset.left + 150 + 10, y: parentOffset.top + 150 + 10};
                    var touch = {x: x, y: y};
                    var dx = touch.x - center.x;
                    var dy = touch.y - center.y;
                    var scale = radius / Math.sqrt(dx * dx + dy * dy);
                    var slider = {
                        x: dx * scale + center.x, y: dy * scale + center.y
                    };
                    var setX = (-20-parentOffset.left + slider.x);
                    var setY = (-20-parentOffset.top + slider.y);
                    document.getElementById("slider").style.left = setX + "px";
                    document.getElementById("slider").style.top = setY + "px";
                    document.getElementById("x1").innerText = getAngle(setX, setY-10).toString();
                }
                // Release event
                function release() {
                    document.removeEventListener('drag', move);
                    document.removeEventListener('dragend', release);
                }
    
        function PUT() {
            fetch("http://192.168.8.100/api/4lIQDtPyXMDt9Zjfnjf4FcFffWTRYRg9U71eWuP0/lights/9/state",{
                method: "PUT",
                body: JSON.stringify({on:true, sat:254, bri:154, hue:10000})
            })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
            })
        }
    }
}