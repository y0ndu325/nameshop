$(function () {
    $('.collection__inner').slick({
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
    })


    $('.header__btn').on('click', function(){
        $('.leftside-menu').removeClass('leftside-menu--close')
    })
    $('.leftside-menu__close').on('click', function(){
        $('.leftside-menu').addClass('leftside-menu--close')
    })
    $('.leftside-menu__content-link-1').on('click', function(){
        $('.leftside-menu').addClass('leftside-menu--close')
    })
    $('.leftside-menu__content-link-2').on('click', function(){
        $('.leftside-menu').addClass('leftside-menu--close')
    })

    $('.market__link-btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close')
    })


    $('.market__link-search').on('click', function(){
        $('.search').removeClass('search--active')
    })
   
    
    $('.menu__list-btn-1').on('click', function(){
        $('.main__direction-1').removeClass('main__direction--close-1')
    })
    $('.leftside-menu__content-link-1').on('click', function(){
        $('.main__direction-1').removeClass('main__direction--close-1')
    })

    $('.main__close').on('click', function(){
        $('.main__direction-1').addClass('main__direction--close-1')
    })
    
    $('.menu__list-btn-2').on('click', function(){
        $('.main__direction-2').removeClass('main__direction--close-2')
    })
    $('.leftside-menu__content-link-2').on('click', function(){
        $('.main__direction-2').removeClass('main__direction--close-2')
    })

    $('.main__close').on('click', function(){
        $('.main__direction-2').addClass('main__direction--close-2')
    })
     
});