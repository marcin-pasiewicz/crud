(function($) {

  function contactClick() {
    var $this = $(this);
    $('.active').removeClass('active');
    $this.addClass('active');
    // TODO: Uzupełnij funkcję contactClick tak, aby jej kliknięcie przypisywało pełne imię kontaktu do zmiennej 'clickedContactFullName'
    // HINT: posłuż się funkcją getFullName
    // var id = $this.attr(...);
    // var contact = data.???;
    // clickedContactFullName = ???;
  }

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
    $contactButton.click(contactClick);
  }

  function processContacts(contacts) {
    $.each(contacts, addContactFromData);
  }

  function init(contacts) {
    $('#contact-list').empty();
    processContacts(contacts);
  }

  init(data.contacts);

}(jQuery));
