(function($) {

  function getFullName(contact) {
    var fullName = '';
    if (!contact || !contact.name) {
      return fullName;
    }
    fullName = contact.name;
    if (!contact.surname) {
      return fullName;
    }
    fullName = contact.name + ' ' + contact.surname;
    return fullName;
  }

  function addContactFromData(contact) {
    // TODO: Rozwiń funkcję tak, aby dodawała do elementu o id 'contact-list' element 'a' z:
    // href '#'
    // klasą 'list-group-item'
    // etykietą = pełnym imieniem i nazwiskiem kontaktu
    // HINT: użyj funkcji 'getFullName'
    // UWAGA: kolejność ważna 1. href 2. klasa
  }

  function init() {
      $('#contact-list').empty();
  }

  init();

}(jQuery));
