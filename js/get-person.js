var url = 'https://xtern-roster.herokuapp.com/people';

 function loadpeople(people) {
     $.each(people, function(i, person) {
     addperson(person);
   });
 }

 function addperson(person) {
   var li = $('.template')
     .clone()
     .removeClass('template');

   li.find('.person-name').text(person.name);
   li.attr('data-id', person.id);
   $('#personList').append(li);
 }

 $.get({
   url: url,
   success: loadpeople
 });
