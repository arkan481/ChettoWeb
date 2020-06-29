var chatBox=document.getElementById("chatid");
var input=document.getElementById("inputid");

function append(){
    chatBox.appendChild(createuserchat());
    if (input.value=="--img") 
        var gambar=input.value.split(" ");
        replyhi(gambar[1]);
    }
}

function createuserchat(){
    var div=document.createElement("div");
    var span=document.createElement("span");
    span.style.borderRadius = "15px";
    span.style.marginRight = "30px";
    span.style.paddingTop = "10px";
    span.style.paddingBottom = "10px";
    span.style.paddingRight = "20px";
    span.style.paddingLeft = "20px";
    span.style.backgroundColor ="green";
    div.style.textAlign = "right";
    div.style.marginTop= "20px";
    span.textContent = input.value;
    div.appendChild(span);
    return div;
}

function replyhi(){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = "https://fast.customer.io/s/cio-mascot-hello-wave.gif";
    img.width = "550";
    img.height = "300";

    img.style.marginLeft = "10px";
    div.style.boxShadow="darkgrey 5px 5px 5px 5px";
    div.style.marginTop = "20px";

    div.appendChild(img);

    chatBox.appendChild(div);
}

function replyimage(gambar){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src =`https://source.unsplash.com/1600x900/?${gambar}`;
    img.width = "400";
    img.height = "300";

    img.style.marginLeft = "10px";

    div.style.marginTop = "20px";

    div.appendChild(img);

    return div;

}