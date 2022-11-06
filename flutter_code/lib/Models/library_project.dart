import 'package:json_annotation/json_annotation.dart';

import 'project.dart';
import 'migration.dart';

part 'library_project.g.dart';

@JsonSerializable()
class LibraryProject extends Project {
  @JsonKey(name: "latest_version")
  String latestVersion;
  @JsonKey(name: "is_obj_c")
  bool isObjC;
  String link;
  List<String> supporting;
  List<String> compatiblity;
  List<String> integration;

  LibraryProject({
    required String name,
    required String imageName,
    required String description,
    required this.latestVersion,
    required bool isFromScratch,
    required bool isMaintained,
    required bool isAddFeat,
    required bool isRedesign,
    required bool isHandedOver,
    required this.isObjC,
    Migration? migration,
    required this.link,
    required this.supporting,
    required this.compatiblity,
    required this.integration,
    required List<String> tags,
  }) : super(
          name: name,
          imageName: imageName,
          description: description,
          isFromScratch: isFromScratch,
          isMaintained: isMaintained,
          isAddFeat: isAddFeat,
          isRedesign: isRedesign,
          isHandedOver: isHandedOver,
          migration: migration,
          tags: tags,
        );

  factory LibraryProject.fromJson(Map<String, dynamic> json) =>
      _$LibraryProjectFromJson(json);

  Map<String, dynamic> toJson() => _$LibraryProjectToJson(this);
}
