$(document).ready(function() {
    $('.drag').on('dragstart', function(event) {
      $(this).addClass('dragging');
      event.originalEvent.dataTransfer.setData('text/plain', $(this).attr('id'));
    });
  
    $('.drag').on('dragend', function() {
      $(this).removeClass('dragging');
    });
  
    $('.container').on('dragover', function(event) {
      event.preventDefault();
    });
  
    $('.container').on('drop', function(event) {
      event.preventDefault();
      var data = event.originalEvent.dataTransfer.getData('text');
      $('#' + data).appendTo(this);
    });
  });