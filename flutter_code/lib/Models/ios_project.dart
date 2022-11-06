import 'package:json_annotation/json_annotation.dart';

import 'project.dart';
import 'migration.dart';

part 'ios_project.g.dart';

@JsonSerializable()
class IosProject extends Project {
  String link;
  bool isSwiftUI;

  IosProject({
    required String name,
    required String imageName,
    required String description,
    required bool isFromScratch,
    required bool isMaintained,
    required bool isAddFeat,
    required bool isRedesign,
    required bool isHandedOver,
    required this.isSwiftUI,
    Migration? migration,
    required this.link,
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

  factory IosProject.fromJson(Map<String, dynamic> json) =>
      _$IosProjectFromJson(json);

  Map<String, dynamic> toJson() => _$IosProjectToJson(this);
}
