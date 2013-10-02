/**
 * Helps with links created by RailsPHP.
 */
$(function(){
var $document = $(document);
$document.on('click', 'a[data-confirm]', function() {
  if ($(this).attr('data-method') || !confirm($(this).attr('data-confirm'))) {
    return false;
  }
});

$document.on('click', 'a[data-method]', function() {
  if ($(this).attr('data-confirm') && !confirm($(this).attr('data-confirm'))) {
    return false;
  }
  
  var m = $(this).attr('data-method');
  var f = $('<form>')
            .css('display', 'none')
            .attr({
              method: 'post',
              action: $(this).attr('href')
            });
  
  if (m != 'post') {
    $('<input>')
      .attr({
        type: 'hidden',
        name: '_method',
        value: m
      })
      .appendTo(f);
  }
  
  f.submit();
  return false;
});
});
