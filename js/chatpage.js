var chatBox = document.getElementById("chatbox");
var chatinput = document.getElementById("chatinput");

function append() {
    chatBox.appendChild(createChatBubble());
    if(chatinput.value == "spot") {
        chatBox.appendChild(replyWithSpotify());
    }else if (chatinput.value == "img") {
        chatBox.appendChild(replyWithImage());
    } 
    else {
        chatBox.appendChild(replyWithWiki());
    }
}

function createChatBubble() {
    var div = document.createElement("div");
    var span = document.createElement("span");

    span.style.borderRadius = "15px";
    span.style.marginRight = "30px";
    span.style.paddingTop = "10px";
    span.style.paddingBottom = "10px";
    span.style.paddingRight = "20px";
    span.style.paddingLeft = "20px";
    span.style.backgroundColor ="green";

    div.style.textAlign = "right";
    span.textContent = chatinput.value;
    div.appendChild(span);

    return div
}

function replyChatBubble() {
    var div = document.createElement("div");
    var span = document.createElement("span");


    span.style.borderRadius = "15px";
    span.style.marginLeft = "30px";
    span.style.paddingTop = "10px";
    span.style.paddingBottom = "10px";
    span.style.paddingRight = "20px";
    span.style.paddingLeft = "20px";
    span.style.backgroundColor ="green";

    div.style.marginTop = "20px";
    div.style.textAlign = "left";
    span.textContent = chatinput.value;

    div.appendChild(span);

    return div;
}

function replyWithSpotify() {
    var div = document.createElement("div");
    var spot = document.createElement("iframe");
    spot.style.marginLeft = "10px";
    spot.src = "https://open.spotify.com/embed/track/1OE5l6sedVcIFELMuxQOPI";
    spot.allow = "encrypted-media";
    spot.frameBorder = "0";
    spot.allowtransparency = "true";
    spot.width = "300";
    spot.height = "380";

    div.style.marginTop = "20px";

    div.appendChild(spot);

    return div;
}

function replyWithImage() {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = `https://source.unsplash.com/1600x900/?${chatinput.value}`;
    img.width = "400";
    img.height = "300";

    img.style.marginLeft = "10px";

    div.style.marginTop = "20px";

    div.appendChild(img);

    return div;
}

function replyWithWiki() {
    var div = document.createElement("div");
    var iframe = document.createElement("iframe");

    iframe.style.marginLeft = "10px";
    iframe.src = "https://en.wikipedia.org/w/index.php?title=Car&printable=yes";
    iframe.frameBorder = "0";
    iframe.allowtransparency = "true";
    iframe.width = "50%";
    iframe.height = "380";

    div.appendChild(iframe);

    return div;
}

