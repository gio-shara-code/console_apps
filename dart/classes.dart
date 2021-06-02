class User {
  String? firstName;
  String? lastName;
  String? id;
  String? email;
  User({this.email, this.firstName, this.id, this.lastName});

  @override
  String toString() {
    return "firstName: ${firstName}, lastName: ${lastName}, id: ${id}, email: ${email}";
  }
}

class Company {}

class Invitation {}

class Boss extends User {
  Boss({String? fName, String? lName, String? email, String? id})
      : super(lastName: lName, id: id, email: email, firstName: fName);
}

class CoWorker extends User {
  Invitation? invitation;
  CoWorker(
      {String? fName,
      String? lName,
      String? email,
      String? id,
      String? profileImagePath})
      : super(lastName: lName, id: id, email: email, firstName: fName);

  factory CoWorker.toJson(Map<String, dynamic> data) {
    return CoWorker(
      email: data["email"],
      fName: data["firstName"],
    );
  }
}

void main() {
  final User user = CoWorker(fName: "Giorgi");
  if (user is CoWorker) {
    print('user is co_worker');
  } else
    print('user is boss');
}
