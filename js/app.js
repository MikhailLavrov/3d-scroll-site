// 3D Scroll

let zSpacing = -1000, //Расстояние по оси Z
		lastPos = zSpacing / 5, //Стартовая позиция каждого фрейма
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames), //Массив из всех элементов
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop, //Расстояние от верха до текущей позиции при скролле
			delta = lastPos - top //Вычисляет последнюю позицию

	lastPos = top //Обновляем последнюю позицию

	frames.forEach(function(n, i) { //n - это текущий обрабатываемый элемент, а i - это индекс его
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5 //Чем больше тем дольше прокрутка длится
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0 //Чем больше 1.8 тем раньше пропадает
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)