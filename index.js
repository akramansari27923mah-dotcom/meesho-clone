let para = document.querySelectorAll("#all-para >div > p")
let span = document.querySelectorAll("#all-para  span")
let arrow = document.querySelector("#arrow")
let view = document.querySelector("#view-all")
let body = document.querySelector("body")
let search = document.querySelector("#searchsvg")
let inp = document.querySelector("#inp")



para.forEach(function (paras) {
  paras.addEventListener("mouseover", function (dets) {
    let text = dets.target.textContent


    span.forEach(function (spans) {
      spans.classList.remove("hidden")
    })
  })

})


para.forEach(function (paras) {
  paras.addEventListener("mouseout", function () {
    span.forEach(function (spans) {
      spans.classList.add("hidden")

    })
  })

})

// view or arrow

view.addEventListener("mouseover", function (dets) {
  view.style.textDecoration = "underline"

})

view.addEventListener("mouseout", function (dets) {
  view.style.textDecoration = "none"

})

arrow.addEventListener("mouseover", function () {
  view.style.textDecoration = "underline"
})
arrow.addEventListener("mouseout", function () {
  view.style.textDecoration = "none"
})


// card
let profile = document.querySelector("#pro")
let card = document.querySelector("#card")

profile.addEventListener("mouseover", function () {
  card.style.display = "block"
})

profile.addEventListener("mouseout", function () {
  card.style.display = "none"
})

card.addEventListener("mouseover", function () {
  card.style.display = "block"
})

card.addEventListener("mouseout", function () {
  card.style.display = "none"
})

let show = document.querySelector("#show")
let slt = document.querySelector(".selects")
show.addEventListener("click", function () {
  slt.classList.remove("hidden")
  show.classList.add("hidden")
})

// revelves

let up = document.querySelector("#uparrow")
let down = document.querySelector("#downarrow")
let revel = document.querySelector("#revel")

down.addEventListener("click", function () {
  down.classList.add("hidden")
  up.classList.remove("hidden")
  revel.classList.remove("hidden")

})

up.addEventListener("click", function () {
  up.classList.add("hidden")
  down.classList.remove("hidden")
  revel.classList.add("hidden")

})

let spanrevel = document.querySelector("#spanrevel")
let recvep = document.querySelector("#revelp")
let recvep2 = document.querySelector("#revelp2")
let recvep3 = document.querySelector("#revelp3")
let recvep4 = document.querySelector("#revelp4")
let recvep5 = document.querySelector("#revelp5")
let recvep6 = document.querySelector("#revelp6")

recvep2.addEventListener("mouseover", function () {
  spanrevel.textContent = recvep2.textContent
})
recvep2.addEventListener("mouseout", function () {
  spanrevel.textContent = recvep.textContent
})

recvep3.addEventListener("mouseover", function () {
  spanrevel.textContent = recvep3.textContent
})
recvep3.addEventListener("mouseout", function () {
  spanrevel.textContent = recvep.textContent
})

recvep4.addEventListener("mouseover", function () {
  spanrevel.textContent = recvep4.textContent
})
recvep4.addEventListener("mouseout", function () {
  spanrevel.textContent = recvep.textContent
})
recvep5.addEventListener("mouseover", function () {
  spanrevel.textContent = recvep5.textContent
})
recvep5.addEventListener("mouseout", function () {
  spanrevel.textContent = recvep.textContent
})
recvep6.addEventListener("mouseover", function () {
  spanrevel.textContent = recvep6.textContent
})
recvep6.addEventListener("mouseout", function () {
  spanrevel.textContent = recvep.textContent
})

// hamberger

let ham = document.querySelector(".ham")
let left = document.querySelector("#left")
let right = document.querySelector("#right")
ham.addEventListener("click", function () {
  left.classList.toggle("hidden")
  right.classList.toggle("hidden");
})


