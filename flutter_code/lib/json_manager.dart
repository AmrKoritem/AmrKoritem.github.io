import 'dart:convert';

import 'package:flutter/services.dart';

const inovaProjects = 'assets/json/inova.json';
const freeLanceProjects = 'assets/json/free_lance.json';
const voisProjects = 'assets/json/vois.json';
const openSourceProjects = 'assets/json/open_source.json';

class JsonManager {
  static final JsonManager _singleton = JsonManager._internal();

  factory JsonManager() {
    return _singleton;
  }

  JsonManager._internal();

  Future<Map<String, dynamic>> parseJsonFromAssets(String assetsPath) async {
    return rootBundle
        .loadString(assetsPath)
        .then((jsonStr) => jsonDecode(jsonStr));
  }
}

extension JsonProjects on JsonManager {
  Future<Map<String, dynamic>> getInovaProjects() async {
    return parseJsonFromAssets(inovaProjects);
  }

  Future<Map<String, dynamic>> getFreeLanceProjects() async {
    return parseJsonFromAssets(freeLanceProjects);
  }

  Future<Map<String, dynamic>> getVoisProjects() async {
    return parseJsonFromAssets(voisProjects);
  }

  Future<Map<String, dynamic>> getOpenSourceProjects() async {
    return parseJsonFromAssets(openSourceProjects);
  }
}
