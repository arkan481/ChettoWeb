var chatBox=document.getElementById("chatid");
var input=document.getElementById("inputid");

function append(){
    chatBox.appendChild(createuserchat());
    var userInput = input.value;
    var command = userInput.split(" ");
    if (command[0] == "--img") {
        chatBox.appendChild(replyimage(command[1]));
    }else if (command[0]=="--wiki") {
        chatBox.appendChild(replywiki(command[1]));
    }else if (command[0]=="--spot") {
        chatBox.appendChild(replyspot());
    }
    input.value="";
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

function replywiki(wiki){
    var div = document.createElement("div");
    var iframe = document.createElement("iframe");

    iframe.style.marginLeft = "10px";
    iframe.src = `https://en.wikipedia.org/w/index.php?title=${wiki}&printable=yes`;
    iframe.frameBorder = "0";
    iframe.allowtransparency = "true";
    iframe.width = "50%";
    iframe.height = "380";
    div.appendChild(iframe);

    return div;
}

function replyspot(){
    var div = document.createElement("div");
    var spot = document.createElement("iframe");
    spot.style.marginLeft = "10px";
    spot.src = "https://open.spotify.com/embed/track/0QnONzv3TvHAWk294h6DaQ";
    spot.allow = "encrypted-media";
    spot.frameBorder = "0";
    spot.allowtransparency = "true";
    spot.width = "300";
    spot.height = "380";

    div.style.marginTop = "20px";

    div.appendChild(spot);

    return div;

}