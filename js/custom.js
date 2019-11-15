// dropdown Js

// Select Js

$('select').formSelect();

// Modal Js
$('.modal').modal();
$('.tabs').tabs();

$(document).ready(function () {
  $('#add-file').find('.indicator').attr('style', 'right: 780px; left: 0px;');
  $('#share-modal').find('.indicator').attr('style', 'right: 642px; left: 0px;');
  $('#comment-modal').find('.indicator').attr('style', 'right: 582px; left: 0px;');
  $('.tooltipped').tooltip();
  $('.hover-dropdown').dropdown({
    closeOnClick: false
  });
});

// Accordin Js

$('.collapsible').collapsible();

// Dropdown Js
//$('.dropdown-trigger').dropdown();

$('.downarrow-powered').dropdown({
  coverTrigger: false,
});
$('.savedropdown-icon').dropdown({
  coverTrigger: false,
});
$('.dropdown-trigger').dropdown({
  coverTrigger: false,
  //closeOnClick: false
});

// Navigation Sidebar Js

$('.sidebar-nav ul li').click(function () {
  var tab_id = $(this).attr('data-tab');
  $('ul.tabs li').removeClass('current');
  $('.sidebar_nav .sidebar-submenu').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
  $('#content').addClass('sidebar-open-margin');
  if ($('.sidebar-submenu').hasClass('current')) {
    $('#content').addClass('sidebar-open-margin');
  } else {
    $('#content').removeClass('sidebar-open-margin');
  }
})


function arrowback() {
  $('.sidebar-submenu').addClass('openNav');
  $('#content').removeClass('sidebar-open-margin');
  $('.sidebar_nav .sidebar-submenu').removeClass('current');
}

$('.nav-menu').click(function () {
  if ($('.sidebar-nav').hasClass('sidebar-nav-close')) {
    $('.sidebar-nav').removeClass('sidebar-nav-close');
    $(this).parent().addClass('full-width-nav');
    $('.page-header').addClass('add-header-margin');
    $('#content').addClass('content-margin');
  } else {
    $('.sidebar-nav').addClass('sidebar-nav-close');
    $(this).parent().removeClass('full-width-nav');
    $('.page-header').removeClass('add-header-margin');
    $('#content').removeClass('content-margin');
  }
})

// Treeview JS

$(document).ready(function () {
  var botao = $(".arrow");
  botao.on("click", function () {
    $(this).parent().find("ul:first").slideToggle();
    if ($(this).hasClass('arrowDown')) {
      $(this).removeClass('arrowDown');
    } else {
      $(this).addClass('arrowDown');
    }
  })
});

// Arrow Click Scroll to end

$('.scroll-arrow').click(function () {
});

// Nav Toggle menu

$('.menu').click(function () {
  $(this).toggleClass('open');
});

// Top Viewers DropDown 

$('.collapse-arrow').click(function () {
  if ($(this).parent().children('.viewers-content').hasClass('content-show')) {
    $(this).parent().children('.viewers-content').removeClass('content-show');
    $(this).addClass('rotate-arrowdrop');
  } else {
    $(this).parent().children('.viewers-content').addClass('content-show');
    $(this).removeClass('rotate-arrowdrop');
  }
});

$('.file-arrow').click(function () {
  $(this).parent('.top-file-row');
  if ($(this).parent('.top-file-row').hasClass('top-file-collapse')) {
    $(this).parent('.top-file-row').removeClass('top-file-collapse');
    $(this).addClass('file-arrowRotate');
  } else {
    $(this).parent('.top-file-row').addClass('top-file-collapse');
    $(this).removeClass('file-arrowRotate');
  }
});


// Marketing Toggle Js

$('.view-more').click(function () {
  $(this).parent().parent().children().eq(1).children().eq(1).slideToggle();
  $(this).parent().parent().parent();

  if ($(this).parent().parent().parent().hasClass('addbg')) {
    $('.anaytics-overviewbg').removeClass('addbg');
    $('.view-more span').text("See Less");
  } else {
    $('.anaytics-overviewbg').addClass('addbg');
    $('.view-more span').text("View More");
  }
});

// Q2 Marketing Toggle Js
$('.marketing-arrow ').click(function () {
  $('.q2-marketing-content').slideToggle();
  if ($('.marketing-arrow ').hasClass('current')) {
    $('.marketing-arrow ').removeClass('current');
  } else {
    $('.marketing-arrow ').addClass('current');
  }
});


// ClientPoint Title Toggle

$('.editTitle').click(function () {
  $('.client-search-title').css('display', 'flex');
})
$('.closeBtn').click(function () {
  $('.client-search-title').css('display', 'none');
});

// Clientpoint Sidebar Table Toggle

$('.toggle-back-arrow').click(function () {
  if ($('.perposal-postion-right').hasClass('creating-perposal-rightpanelmove')) {
    $('.perposal-postion-right ').removeClass('creating-perposal-rightpanelmove');
    $('.creating-perposal-left').css('width', '100%');
    $('.showtable-content-arrow').addClass('showArrow');
  } else {
    $('.perposal-postion-right ').addClass('creating-perposal-rightpanelmove');
    $('.creating-perposal-left').css('width', '64.7%');
    $('.showtable-content-arrow').removeClass('showArrow');
  }
});

$('.showtable-content-arrow').click(function () {
  $('.creating-perposal-left').css('width', '64.7%');
  $('.showtable-content-arrow').removeClass('showArrow');
  $('.perposal-postion-right').addClass('creating-perposal-rightpanelmove');
});

// Viwer Nav sidebar

$('.viewer-links').click(function () {
  $('.viewer-links.current').removeClass('current');
  $(this).addClass('current');
  var tab_id = $(this).attr('data-tab');
  $('.viewer-sidebar-common').removeClass('viewerSidebarOpen');
  $("#" + tab_id).addClass('viewerSidebarOpen');
  $('.overlay').remove();
  if ($(".viewer-sidebar-common").hasClass('viewerSidebarOpen')) {
    $('body').prepend('<div class="overlay"></div>');
  } else {
    $('body').remove('.overlay');
  }
});
function closeSidebar() {
  $('.viewer-sidebar-common').removeClass('viewerSidebarOpen');
  $('.overlay').remove();
  $('.viewer-links.current').removeClass('current');
}

// Filter Dropdown

$('.filter-arrow-dropdown').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
  $('.filter-expended').slideToggle();
});


function valueChnaged() {
  if ($('.switcherChecked').is(":checked")) {
    $(".clientpoint-preview").show();
    $('.switcherText').html("Hide Top Bar");
  }
  else {
    $(".clientpoint-preview").hide();
    $('.switcherText').html("Show Top Bar");
  }
}


function editOptions() {
  if ($('.filled-in').is(":checked")) {
    // alert();
    $(".tableOptions").addClass('hideOptions');
  }
  else {
    $(".tableOptions").removeClass('hideOptions');
  }
}

function removeOptions() {
  $(".tableOptions").removeClass('hideOptions');
}

$('.user-toggle').click(function(){
  $(this).parent().parent().children().find(".user-info").slideToggle();
  if($(this).hasClass('rotate-arrow')) {
    $(this).removeClass('rotate-arrow');
    $(this).parent().parent().addClass('active-row');
  } else  {
    $(this).addClass('rotate-arrow');
    $(this).parent().parent().removeClass('active-row');
  }
})



// $('.scrollbar-inner').scroll(function () {
//   //event.preventDefault()
//   var scroll = $(this).scrollTop();
//   if(scroll == 0){
//     //alert(123)
//     console.log('dsfsdf');
//   }
//  });

// $('.scrollbar-inner').scroll(function(){

// var scroll = $(this).scrollTop();
// console.log(scroll);
// if(scroll > 0) {
//   // $('.editing-heading-pagination').css('top', + scroll + 'px');
//   $('.editing-heading-pagination').css('top', + scroll + 'px');
//   //console.log('a');
// } else {
//   //console.log('b');
//   $('.editing-heading-pagination').css('top', '0' + 'px');
// }

// });