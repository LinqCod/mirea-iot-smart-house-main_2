document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
})

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function() {
    window.localStorage.clear();
};

var roomsAndDevices = new Map();

function initRooms() {
    roomsAndDevices.forEach((value, key) => {
        $(".left_menu").append(`
        <div class="room_box ${key}">
            <div class="room_box_text">${key}</div>
            <div class="deleteRoom">
                <svg width="28" height="28" viewBox="0 0 38 38" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.88672 16.4219H16.4219V2.88672C16.4219 1.46875 17.582 0.308594 19 0.308594C20.418 0.308594 21.5781 1.46875 21.5781 2.88672V16.4219H35.1133C36.5312 16.4219 37.6914 17.582 37.6914 19C37.6914 20.418 36.5312 21.5781 35.1133 21.5781H21.5781V35.1133C21.5781 36.5312 20.418 37.6914 19 37.6914C17.582 37.6914 16.4219 36.5312 16.4219 35.1133V21.5781H2.88672C1.46875 21.5781 0.308594 20.418 0.308594 19C0.308594 17.582 1.46875 16.4219 2.88672 16.4219Z"/>
                </svg>
            </div>
        </div>
        `);
    });
}

function displayDevices(room) {

    document.querySelector(".right_menu_down").innerHTML = "";

    var index = 0;

    console.log(roomsAndDevices.get(room));

    roomsAndDevices.get(room).forEach(e => {
        var image;
        switch (e.name) {
            case "Teapot1":
            case "Teapot2":
                image = "img/teapot.jpg";
                break;    
            case "Humd1":
            case "Humd2":
                image = "img/humd.jpg";
                break;
            case "Lamp1":
            case "Lamp2":
                image = "img/lamp.jpg";
                break;
            case "TV1":
            case "TV2":
                image = "img/tv.jpg";
                break;
            case "Coffee1":
            case "Coffee2":
                image = "img/coffee.jpeg";
                break;
            case "Cond1":
            case "Cond2":
                image = "img/cond.jpg";
                break;
            case "Music1":
            case "Music2":
                image = "img/music.jpeg";
                break;
            default:
                break;
        }
 
        $(".right_menu_down").append(`
                    <div class="device_box ${e.name}">
            <div class="device_box_left">
                <div class="device_box_left_img">
                    <img src=${image} alt="">
                </div>
                <div class="device_box_left_text">
                    <div class="devName">
                        <h3>${e.name}</h3>
                    </div>
                    <div class="devInfo">
                        <p>Lorem, ipsum dolor sit amet consectetuasdasdasdsassssss ss sdasd a assad as sdf a asda
                            asd sf ssdf sdfsssr</p>      
                    </div>
                </div>
            </div>

            <div class="device_box_right ${index}">
                <div class="devMG">
                    <div class="turn_on ${e.name}">
                        <svg width="70" height="70" viewBox="0 0 70 70"
                             xmlns="http://www.w3.org/2000/svg" fill=${color}>
                            <defs>
                                <filter id="onOffShadow">
                                    <!-- Shadow offset -->
                                    <feOffset cdx='0' dy='4'/>
                                    <!-- Shadow blur -->
                                    <feGaussianBlur stdDeviation='4' result='offset-blur'/>

                                    <!-- Invert drop shadow to make an inset shadow -->
                                    <feComposite operator='out' in='SourceGraphic' in2='offset-blur'
                                                 result='inverse'/>

                                    <!-- Cut color inside shadow -->
                                    <feFlood flood-color='black' flood-opacity='.95' result='color'/>
                                    <feComposite operator='in' in='color' in2='inverse' result='shadow'/>

                                    <!-- Placing shadow over element -->
                                    <feComposite operator='over' in='shadow' in2='SourceGraphic'/>
                                </filter>
                            </defs>
                            <path class="on_off" d="M35 0C15.6712 0 0 15.6712 0 35C0 54.3288 15.6712 70 35 70C54.3288 70 70 54.3288 70 35C70 15.6712 54.3288 0 35 0ZM30.625 13.125C30.625 10.9375 32.8125 8.75 35 8.75C37.1875 8.75 39.375 10.9375 39.375 13.125V30.625C39.375 32.8125 37.1875 35 35 35C32.8125 35 30.625 32.8125 30.625 30.625V13.125ZM35 56.875C22.9163 56.875 13.125 47.0838 13.125 35C13.125 26.0269 18.5238 18.3225 26.25 14.945V25.2175C23.5681 27.6194 21.875 31.1106 21.875 35C21.875 42.2494 27.7506 48.125 35 48.125C42.2494 48.125 48.125 42.2494 48.125 35C48.125 31.1106 46.4319 27.6194 43.75 25.2175V14.945C51.4762 18.3225 56.875 26.0269 56.875 35C56.875 47.0838 47.0838 56.875 35 56.875Z"/>
                        </svg>
                    </div>
                    <div class="delete ${e.name}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>
                            Trash</title>
                            <path d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z" fill="none"/>
                            <path fill="#C71105"
                                  d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z"/>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
        `);
        var color = e.info["enable"] ? "setColorRed": "green";
        console.log(e.info["enable"]);
        if(color === "green") {
            document.querySelector(".turn_on."+e.name).firstElementChild.getElementsByClassName("on_off")[0].setAttribute("fill", color);
        } else {
            document.querySelector(".turn_on."+e.name).firstElementChild.getElementsByClassName("on_off")[0].classList.add(color);
        }
        console.log(e.info);

        for (const property in e.info) {
            console.log(`${property}: ${e.info[property]}`);
            $(".device_box_right."+index).append(`<div class="devPropToggler">${property}: ${e.info[property]}</div>`);
        }
        index++;
    });

    document.querySelectorAll('.turn_on').forEach(item => {
                    item.addEventListener('click', event => {
                            console.log(item.firstElementChild.querySelector(".on_off").classList.contains("setColorRed"));
                            console.log(item.firstElementChild.querySelector(".on_off"));
                            console.log(item.classList[1])
                            if(item.firstElementChild.querySelector(".on_off").classList.contains("setColorRed") ){
                                item.firstElementChild.querySelector(".on_off").classList.remove("setColorRed");
                                turnDeviceOn(item.classList[1], false);
                            } else {
                                item.firstElementChild.querySelector(".on_off").classList.add("setColorRed");
                                turnDeviceOn(item.classList[1], true);
                            }
                        })
                    });

    document.querySelectorAll('.delete').forEach(item => {
                    item.addEventListener('click', event => {
                        console.log(item.parentElement.parentElement.parentElement);
                        item.parentElement.parentElement.parentElement.setAttribute("display", "none");
                        deleteDevice(item.classList[1]);
                    });
    });
}

var currentRoom = "Кухня";
var lastEnableDevice;
var lastDeletedDevice;
var client;
var homeTopic;

function deleteDevice(device) {
    var message = new Paho.MQTT.Message("disconnect"); 
    message.destinationName = homeTopic+"/"+currentRoom+"/"+device;
    lastDeletedDevice = device;
    client.send(message);
}

function turnDeviceOn(device, command) {
    var message;
    if(command) {
        message = new Paho.MQTT.Message("{\"cmd\":\"on\"}");
    } else {
        message = new Paho.MQTT.Message("{\"cmd\":\"off\"}");   
    }
   
    message.destinationName = homeTopic+"/"+currentRoom+"/"+device;
    lastEnableDevice = device;
    client.send(message);
}

//Login and connecting to the server
$('.form_1').submit(function(event) {
    document.getElementById('myModal').style.display = "none";
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
    if (window.localStorage.getItem('isLoggedIn') === null) {
        const form = event.target;
        const broker = form.elements['broker'].value;
        const port = form.elements['port'].value;
        homeTopic = form.elements['topic'].value;

        //Connect to server
        var chart; // global variuable for chart
        var dataTopics = new Array();
        //mqtt broker
        client = new Paho.MQTT.Client(broker, Number(port), "myclientid_" + parseInt(Math.random() * 100, 10));
        client.onMessageArrived = onMessageArrived;
        client.onConnectionLost = onConnectionLost;

        var options = {
            timeout: 1.5,
            onSuccess: function() {
                console.log("mqtt connected");
                window.localStorage.setItem('isLoggedIn', true);
                client.subscribe(homeTopic, {qos: 1});
                client.subscribe(homeTopic+"/Кухня/#", {qos: 1});
                client.subscribe(homeTopic+"/Гостиная/#", {qos: 1});
                client.subscribe(homeTopic+"/Комната/#", {qos: 1});
                message = new Paho.MQTT.Message("annonce");
                message.destinationName = homeTopic;
                client.send(message);
                setTimeout(() => {
                    initRooms();
                    displayDevices(currentRoom);
                    document.querySelectorAll('.room_box').forEach(item => {
                    item.addEventListener('click', event => {
                            currentRoom = item.classList[1];
                            displayDevices(currentRoom);
                        })
                    });
                }, 1500);
            },
            onFailure: function(message) {
                console.log("Connection failed, ERROR: " + message.errorMessage);
            }
        };

        function onConnectionLost(responseObject) {
            console.log("connection lost: " + responseObject.errorMessage);
        }

        function onMessageArrived(message) {
            const topic = message.destinationName;
            const msg = message.payloadString;

            var jsonMsg;

            try {
                jsonMsg = JSON.parse(msg);
                
                if(jsonMsg.hasOwnProperty('cmd')) {
                    console.log("cmd");
                    //TODO: operate with command
                } else if(jsonMsg.hasOwnProperty('room')) {
                    if(roomsAndDevices.has(jsonMsg.room)) {
                        if(roomsAndDevices.get(jsonMsg.room).indexOf(jsonMsg) < 0) {
                            roomsAndDevices.get(jsonMsg.room).push(jsonMsg);
                        }
                    } else {
                        roomsAndDevices.set(jsonMsg.room, [jsonMsg]);
                    }
                } else {
                    var toFind = roomsAndDevices.get(currentRoom).find(obj => {
                        return obj.name === lastEnableDevice;
                    });
                    var index = roomsAndDevices.get(currentRoom).indexOf(toFind);
                    roomsAndDevices.get(currentRoom)[index].info = jsonMsg;
                    displayDevices(currentRoom);
                }
            }
            catch (e) {
                if(msg === "disconnect") {
                    console.log("awdefrg");
                    var toFind = roomsAndDevices.get(currentRoom).find(obj => {
                        return obj.name === lastDeletedDevice;
                    });
                    var index = roomsAndDevices.get(currentRoom).indexOf(toFind);
                    roomsAndDevices.get(currentRoom).splice(1,index);
                    displayDevices(currentRoom);
                } else {
                    console.log('annonce command');
                }
            }
        }
        client.connect(options);
    } else {
        alert("You're already logged in!");
    }

});
