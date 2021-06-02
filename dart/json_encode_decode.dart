import 'dart:convert';

void main() {
  String str = '{"name": "helo Wordl"}';
  final res = jsonDecode(str); //error if str is emtpy

  Map<String, dynamic> data = {"name": "Giorgi"};
  String dataJson = jsonEncode(data);
  print(dataJson);
}
