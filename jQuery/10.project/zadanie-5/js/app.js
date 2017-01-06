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

  function addContactFromData(key, contact) {
    var fullName = getFullName(contact);
    var $contactButton = $('<a href="#" class="list-group-item">' + fullName + '</a>');
    $('#contact-list').append($contactButton);
    $contactButton.attr('data-id', key);
  }

  function processContacts(contacts) {
    var result = '';
    // TODO: przejść po tablicy, dopisując do `result` klucz (indeks) i wartości name i surname
    return result;
  }

  function init() {
    $('#contact-list').empty();
  }

  init();

}(jQuery));
