const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")
const $progress = document.querySelector("#progress")

$play.addEventListener("click",HandlePlay)
$pause.addEventListener("click",HandlePause)
$backward.addEventListener("click", HandleBackward)
$forward.addEventListener("click", HandleFordward)
$video.addEventListener("loadedmetadata", HandleLoading)
$video.addEventListener("timeupdate", HandleTimeUpdate)
$progress.addEventListener("input", HandleUpdateProgress)

function HandlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    $forward.hidden = false
    $backward.hidden = false
    console.log('reproduciste el video')
}

function HandlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('pausaste el video')
}

$backward.addEventListener('click', HandleBackward)

function HandleBackward(){
    $video.currentTime -= 10
    console.log('retrocediste el video 10 segundos')
}

$forward.addEventListener('click', HandleFordward)

function HandleFordward(){
    $video.currentTime = $video.currentTime + 10
    console.log('adelantaste el video 10 segundos')
}

function HandleLoading(){
    $progress.max = $video.duration
    console.log($video.duration)
}

function HandleTimeUpdate(){
    $progress.value = $video.currentTime
}

function HandleUpdateProgress(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}