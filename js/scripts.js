$(document).ready(function() {
  $('#btnHeader').click(function(){
    $('form').slideDown();
  });

  $('#cancel').click(function() {
    $('form').slideUp();
  });

  $('form').on('submit', function(e) {    
    e.preventDefault();    

    const addressTitle = $('#taskTitle').val();
    const addressDescription = $('#taskDescription').val();
    const containerDescription = $(`<ul style= "display: block"></ul>`);
    const newItem = $('<li style= "display: none"></li>');
    const strikeThrough = $(`<p style="font-size: 2.2rem">${addressTitle}</p> <p>${addressDescription}</p>`);
    $(strikeThrough).appendTo(newItem);
    $(containerDescription).appendTo('article');
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(2000);    
    $('#taskTitle, #taskDescription').val(''); 

    $(strikeThrough).click(function() {
      $(this).toggleClass('strike-through')
    });

  }); 

});