const tagsA = document.querySelectorAll('a')

for (let a of tagsA) { 
    a.addEventListener('click', (event) => {
        event.preventDefault()
        let coords = a.getBoundingClientRect();
        let toolstip = document.querySelector('.tooltip_active')
        
        if (toolstip) {

            if (a.title == toolstip.textContent) {
                (toolstip).parentNode.removeChild(toolstip)
            } else {
                (toolstip).parentNode.removeChild(toolstip)
                a.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" style="left: ${coords.left}px; top: ${coords.bottom}px">${a.title}</div>`)
            }
        } else {
            a.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" style="left: ${coords.left}px; top: ${coords.bottom}px">${a.title}</div>`) 
        }
    })
}