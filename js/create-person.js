
$('#new_person').on('submit', handleCreateFormSubmit);

function handleCreateFormSubmit(ev) {
  ev.preventDefault();
  var f = ev.currentTarget;
  var person = {
    name: f.personName.value,
    promoted: true
  };
  createperson(person);
}

 function createperson(person) {
   $.post({
     url: url,
     data: {
       person: person
     },
     success: function(person) {
      addperson(person);
     },
   });
 }
