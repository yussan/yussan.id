var el_homenav = document.getElementById('home-navigation')

window.addEventListener('scroll', function(e){
    var cover_height = document.getElementsByClassName('cover')[0].clientHeight 
    if(window.scrollY >= (cover_height - el_homenav.clientHeight))
    {
        el_homenav.classList.add('fixed')
    }else 
    {
        el_homenav.classList.remove('fixed')
    }
})