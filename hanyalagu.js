const { exec } = require('child_process')
setTimeout(function() {
exec(`cd ./XeonMedia && ffplay -autoexit -volume 100 -nodisp -hide_banner selamatdatang.mp3`)
}, 0)
setTimeout(function() {
exec(`cd ./XeonMedia && ffplay -autoexit -volume 100 -nodisp -hide_banner sekarang.mp3`)
}, 5700)
setTimeout(function() {
exec(`cd ./XeonMedia && ffplay -autoexit -volume 100 -nodisp -hide_banner lagunya.mp3`)
}, 8000)
setTimeout(function() {
exec(`cd ./XeonMedia && ffplay -autoexit -volume 100 -nodisp -hide_banner selesai.m4a`)
}, 29500)