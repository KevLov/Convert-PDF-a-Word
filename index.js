    const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', function() {
      const selectedFile = fileInput.files[0];
      uploadFile(selectedFile);
    });

    async function uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/upload', { // Replace '/upload' with your server endpoint
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }








/*
Puedes instalar la librería usando npm install docx-pdf o yarn add docx-pdf.

function Person (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

document.getElementById("demo").innerHTML = mySister.firstName;*/