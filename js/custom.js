$(document).ready(function () {



    /* Responsive menu view  */
    $("#menuclick").click(function () {
        var x = document.getElementById("mynavbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    });


    /* window size jquery */
    $('#closeNav').hide();
    if ($(window).width() > 768) {
        $("#openNav").click(function () {
            $('#mySidenav').attr('style', 'width:19%').show();
            $('#main_content').attr('style', 'margin-left:19%').show();
            $('#openNav').hide();
            $('#closeNav').show();
        });
        $("#closeNav").click(function () {
            $('#mySidenav').attr('style', 'width:0px').show();
            $('#main_content').attr('style', 'margin-left:0px').show();
            $('#openNav').show();
            $('#closeNav').hide();
        });

    }

    if ($(window).width() <= 767) {
        $("#openNav").click(function () {
            $('#mySidenav').attr('style', 'width:50%').show();
            $('#main_content').attr('style', 'margin-left:50%').show();
            $('#openNav').hide();
            $('#closeNav').show();
        });
        $("#closeNav").click(function () {
            $('#mySidenav').attr('style', 'width:0px').show();
            $('#main_content').attr('style', 'margin-left:0px').show();
            $('#openNav').show();
            $('#closeNav').hide();
        });

    }


    /* Begin accordion sidemenu */
    const list = document.querySelectorAll('.list');

    function accordion(e) {
        e.stopPropagation();
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else if (this.parentElement.parentElement.classList.contains('active')) {
            this.classList.add('active');
        } else {
            for (i = 0; i < list.length; i++) {
                list[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    }
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener('click', accordion);
    }

    /* begin filter search */
    $('#inputsearch').keyup(function () {
        var input, filter, ul, li, a, i;
        input = document.getElementById("inputsearch");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");

        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
                $('.filtersearchlist').show();
            } else {
                a[i].style.display = "none";

            }
        }

    })


    /*  browse */

    $('.custom-file-input input[type="file"]').change(function (e) {
        $(this).siblings('input[type="text"]').val(e.target.files[0].name);
    });


    /* hide and show */
    $(".btn-add").click(function () {
        $('.form_wrapper').show();
    });
    $("#hideform").click(function () {
        $('.form_wrapper').hide();
    });



    /* actions */
    $('.fa-ellipsis-h').click(function () {
        $('.dropup-content').toggle();
    })

    $('.fa-trash-o').click(function () {
        alert('Item deleted successfully');
    })

    

    /* tabs change */
    $('#pagetwo').hide();
$('#pageoneclick').click(function () {
        $('#pageone').show();$('#pagetwo').hide();
    })
    $('#pagetwoclick').click(function () {
        $('#pagetwo').show();$('#pageone').hide();
    })

});


