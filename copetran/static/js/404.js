window.onmousemove = (event) => {
    document.querySelectorAll('.move').forEach(element => {
        const data = element.getAttribute('data-value')
        const x = (window.innerWidth - event.pageX * data) / 100
        const y = (window.innerHeight - event.pageY * data) / 100
        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}