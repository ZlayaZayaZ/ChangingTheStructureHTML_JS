const tagsA = document.querySelectorAll('a')

for (let a of tagsA) { 
    a.onclick = () => {
        let coords = a.getBoundingClientRect();
        
        let toolstip = document.querySelector('.tooltip_active')
        if (toolstip) {
            toolstip.classList.toggle('tooltip_active');
        } else {
            a.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" style="left: ${coords.left}px; top: ${coords.bottom}px">${a.title}</div>`) // style="left: 0; top: 0" //left: ${a.offsetLeft}; top: ${top + 10 - scrollTop}
        }
        return false
    }
}
