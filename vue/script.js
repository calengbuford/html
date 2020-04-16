let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'Hello World',
    names: ['Emma', 'Brandon', 'Lucy', 'Jorge'],
    newName: '',
    title: 'Brought to you by JavaScript',
    className: 'red',
    classColor: 'blue',
    isLoading: true,
    tasks: [
        {
            id: 1,
            description: "do this thing",
            completed: true
        },
        {
            id: 2,
            description: "do another",
            completed: false
        },
        {
            id: 3,
            description: "clean here",
            completed: false
        }
    ]
  },
  computed: {
      screaming() {
          return this.message.toUpperCase();
      },
      taskIncomplete() {
          return this.tasks.filter(task => !task.completed);
      }
  },
  // custom methods
  methods: {
    // addName will add the value of the newName property to the list of names
    addName() {
      if (this.newName === '')
        return;
      this.names.push(this.newName);
      this.newName = "";
    },
    toggleLoading() {
        this.isLoading = !this.isLoading;
    }
  }
});
