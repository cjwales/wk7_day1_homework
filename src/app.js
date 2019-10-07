import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Washing Up", isDone: false},
        {name: "Dusting", isDone: false}
      ],
      newTask: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newTask,
          isDone: false
        });
        this.newTask = "";
      },
      doneItem: function(index){
        this.items[index].isDone = true;
      }
    }
  });
});
