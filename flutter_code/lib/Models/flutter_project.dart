import 'package:json_annotation/json_annotation.dart';

import 'project.dart';
import 'migration.dart';
import 'flutter_links.dart';

part 'flutter_project.g.dart';

@JsonSerializable()
class FlutterProject extends Project {
  FlutterLinks links;

  FlutterProject({
    required String name,
    required String imageName,
    required String description,
    required bool isFromScratch,
    required bool isMaintained,
    required bool isAddFeat,
    required bool isRedesign,
    required bool isHandedOver,
    Migration? migration,
    required this.links,
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

  factory FlutterProject.fromJson(Map<String, dynamic> json) =>
      _$FlutterProjectFromJson(json);

  Map<String, dynamic> toJson() => _$FlutterProjectToJson(this);
}
