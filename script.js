let button = document.querySelector('#selctionButton')
let menu = document.querySelector('.optionCustomSelect')
let icon = document.querySelector('.selectionIcon')


button.addEventListener('click',()=>{
    if(menu.classList.contains('desactived')){
        menu.classList.remove('desactived')
        menu.classList.add('activated')
        icon.style = 'transform: rotate(180deg)'
    }else{
        menu.classList.remove('activated')
        menu.classList.add('desactived')
        icon.style = 'transform: rotate(0deg)'
    }
})


