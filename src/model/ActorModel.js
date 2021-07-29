class ActorModel {
    constructor(idOrPlainActor, firstName, lastName, birthday, image, imdbLink) {
      if (arguments.length === 1) {
        this.id = idOrPlainActor.id;
        this.firstName = idOrPlainActor.firstName;
        this.lastName = idOrPlainActor.lastName;
        this.birthday = idOrPlainActor.birthday;
        this.image = idOrPlainActor.image;
        this.imdbLink = idOrPlainActor.imdbLink;
      } else {
        this.id = idOrPlainActor;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink;
      }
    }
    calculateAge() {
      let birthYear = this.birthday.split("-")[0];
      return new Date().getFullYear() - birthYear;
    }
  
    static compare(sortBy, actor1, actor2) {
      switch (sortBy) {
        case "age":
          if (actor1.calculateAge() > actor2.calculateAge()) {
            return 1;
          } else if (actor1.calculateAge() < actor2.calculateAge()) {
            return -1;
          } else {
            return 0;
          }
        case "firstName":
        case "lastName":
          if (actor1[sortBy] > actor2[sortBy]) {
            return 1;
          } else if (actor1[sortBy] < actor2[sortBy]) {
            return -1;
          } else {
            return 0;
          }
        default:
          console.log("Error:" + sortBy + "not recognized");
          break;
      }
    }
  }
  
  export default ActorModel;
  