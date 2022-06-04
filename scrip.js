var demo = document.querySelector(".demo")
var btn = document.querySelector(".btn")

btn.onclick = function (a) {
    a.preventDefault()
    var message = document.querySelector("#message")
    var label = document.createElement("label")
    label.textContent = message.value 
    var chackbox = document.createElement("input")
    chackbox.setAttribute("type","checkbox", )
    demo.append(chackbox)
    demo.append(label)
    chackbox.setAttribute("style","display: block;",)
    message.value =""
}

var demo = document.querySelector(".demo")
var btn = document.querySelector(".btn")

btn.onclick = function (a) {
    a.preventDefault()
    var message = document.querySelector("#message")
    var label = document.createElement("label")
    label.textContent = message.value 
    var chackbox = document.createElement("input")
    chackbox.setAttribute("type","checkbox", )
    demo.append(chackbox)
    demo.append(label)
    chackbox.setAttribute("style","display: block;",)
    message.value =""
}