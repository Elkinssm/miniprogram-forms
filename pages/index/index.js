
Page({
  data: {
    students: []
  },

  onSubmit(e) {
    console.log(e.detail.value);
    // Obtener los datos del formulario
    const name = e.detail.value.name;
    const age = e.detail.value.age;
    const grade = e.detail.value.grade;

    // Agregar el estudiante a la lista
    const students = this.data.students;
    students.push({
      id: new Date().getTime(),
      name: name,
      age: age,
      grade: grade
    });
    this.setData({
      students: students
    });

    // Limpiar el formulario
    e.detail.value.name = "";
    e.detail.value.age = "";
    e.detail.value.grade = "";
  },

  onDelete(e) {
    // Obtener el id del estudiante a eliminar
    const id = e.currentTarget.dataset.id;

    // Eliminar el estudiante de la lista
    const students = this.data.students;
    const index = students.findIndex(student => student.id === id);
    students.splice(index, 1);
    this.setData({
      students: students
    });
  },

});
