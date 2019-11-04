// dropdown Js

// Select Js

$('select').formSelect();

// Modal Js
$('.modal').modal();
$('.tabs').tabs();

$(document).ready(function () {
  $('#addFile').find('.indicator').attr('style', 'right: 780px; left: 0px;');
  $('#shareModal').find('.indicator').attr('style', 'right: 642px; left: 0px;');
  $('#commentModal').find('.indicator').attr('style', 'right: 582px; left: 0px;');
  $('.tooltipped').tooltip();
});

// Accordin Js

$('.collapsible').collapsible();

// Dropdown Js
$('.dropdown-trigger').dropdown();
$('.hoverdropdown').dropdown({
  closeOnClick: false
});
$('.downArrowPowered').dropdown({
  coverTrigger: false,
});
$('.saveDropdownIcon').dropdown({
  coverTrigger: false,
});
$('.dropdown-trigger').dropdown({
  coverTrigger: false,
});

// Navigation Sidebar Js

$('.sidebarNav ul li').click(function () {
  var tab_id = $(this).attr('data-tab');
  $('ul.tabs li').removeClass('current');
  $('.sidebar_nav .sidebarSubmenu').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
  $('#content').addClass('SidebarOpenMargin');
  if ($('.sidebarSubmenu').hasClass('current')) {
    $('#content').addClass('SidebarOpenMargin');
  } else {
    $('#content').removeClass('SidebarOpenMargin');
  }
})


function arrowback() {
  $('.sidebarSubmenu').addClass('openNav');
  $('#content').removeClass('SidebarOpenMargin');
  $('.sidebar_nav .sidebarSubmenu').removeClass('current');
}

$('.navMenu').click(function () {
  if ($('.sidebarNav').hasClass('sidebarNavClose')) {
    $('.sidebarNav').removeClass('sidebarNavClose');
    $(this).parent().addClass('fullWidthNav');
    $('.page-header').addClass('addHeaderMargin');
    $('#content').addClass('contentMargin');
  } else {
    $('.sidebarNav').addClass('sidebarNavClose');
    $(this).parent().removeClass('fullWidthNav');
    $('.page-header').removeClass('addHeaderMargin');
    $('#content').removeClass('contentMargin');
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

$('.ScrollArrow').click(function () {
});

// Nav Toggle menu

$('.menu').click(function () {
  $(this).toggleClass('open');
});

// Top Viewers DropDown 

$('.collapseArrow').click(function () {
  if ($(this).parent().children('.viewers-content').hasClass('contentShow')) {
    $(this).parent().children('.viewers-content').removeClass('contentShow');
    $(this).addClass('rotateArrowdrop');
  } else {
    $(this).parent().children('.viewers-content').addClass('contentShow');
    $(this).removeClass('rotateArrowdrop');
  }
});

$('.fileArrow').click(function () {
  $(this).parent('.top-file-row');
  if ($(this).parent('.top-file-row').hasClass('topFileCollapse')) {
    $(this).parent('.top-file-row').removeClass('topFileCollapse');
    $(this).addClass('fileArrowRotate');
  } else {
    $(this).parent('.top-file-row').addClass('topFileCollapse');
    $(this).removeClass('fileArrowRotate');
  }
});


// Marketing Toggle Js

$('.viewMore').click(function () {
  $(this).parent().parent().children().eq(1).children().eq(1).slideToggle();
  $(this).parent().parent().parent();

  if ($(this).parent().parent().parent().hasClass('addbg')) {
    $('.anaytics-overviewbg').removeClass('addbg');
    $('.viewMore span').text("See Less");
  } else {
    $('.anaytics-overviewbg').addClass('addbg');
    $('.viewMore span').text("View More");
  }
});

// Q2 Marketing Toggle Js
$('.marketingArrow').click(function () {
  $('.q2Marketing-content').slideToggle();
  if ($('.marketingArrow').hasClass('current')) {
    $('.marketingArrow').removeClass('current');
  } else {
    $('.marketingArrow').addClass('current');
  }
});


// ClientPoint Title Toggle

$('.editTitle').click(function () {
  $('.clientSearchtitle').css('display', 'flex');
})
$('.closeBtn').click(function () {
  $('.clientSearchtitle').css('display', 'none');
});

// Clientpoint Sidebar Table Toggle

$('.toggleBackArrow').click(function () {
  if ($('.perposalPostionRight').hasClass('creatingPerposalRightMove')) {
    $('.perposalPostionRight ').removeClass('creatingPerposalRightMove');
    $('.creatingPerposalLeft').css('width', '100%');
    $('.showtableContentArrow').addClass('showArrow');
  } else {
    $('.perposalPostionRight ').addClass('creatingPerposalRightMove');
    $('.creatingPerposalLeft').css('width', '64.7%');
    $('.showtableContentArrow').removeClass('showArrow');
  }
});

$('.showtableContentArrow').click(function () {
  $('.creatingPerposalLeft').css('width', '64.7%');
  $('.showtableContentArrow').removeClass('showArrow');
  $('.perposalPostionRight').addClass('creatingPerposalRightMove');
});

// Viwer Nav sidebar

$('.viewerLinks').click(function () {
  $('.viewerLinks.current').removeClass('current');
  $(this).addClass('current');
  var tab_id = $(this).attr('data-tab');
  $('.viewerSidebarCommon').removeClass('viewerSidebarOpen');
  $("#" + tab_id).addClass('viewerSidebarOpen');
  $('.overlay').remove();
  if ($(".viewerSidebarCommon").hasClass('viewerSidebarOpen')) {
    $('body').prepend('<div class="overlay"></div>');
  } else {
    $('body').remove('.overlay');
  }
});
function closeSidebar() {
  $('.viewerSidebarCommon').removeClass('viewerSidebarOpen');
  $('.overlay').remove();
  $('.viewerLinks.current').removeClass('current');
}

// Filter Dropdown

$('.filterArrowDropdown').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
  $('.filterExpended').slideToggle();
});


function valueChnaged() {
  if ($('.switcherChecked').is(":checked")) {
    $(".clientpointPreview").show();
    $('.switcherText').html("Hide Top Bar");
  }
  else {
    $(".clientpointPreview").hide();
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

