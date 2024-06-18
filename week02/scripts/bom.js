const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

console.log("JS started");

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        console.log("Button clicked");
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
    }
    else {
        input.focus();
    }
});

deleteButton.addEventListener('click', function () {
    console.log("deleteButton Clicked");
    list.removeChild(li);
    input.focus();
    input.value = '';
});

input.value = '';
input.focus();  