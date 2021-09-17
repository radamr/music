let tempo = 0
input.onButtonPressed(Button.A, function () {
    tempo = 0
    for (let index = 0; index < 8; index++) {
        tempo += 50
        music.playMelody("C5 B A G F E D C ", tempo)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
