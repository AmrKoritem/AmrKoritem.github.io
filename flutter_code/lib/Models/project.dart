import 'package:json_annotation/json_annotation.dart';

import 'migration.dart';

part 'project.g.dart';

@JsonSerializable()
class Project {
  String name;
  @JsonKey(name: "image_name")
  String imageName;
  String description;
  @JsonKey(name: "is_from_scratch")
  bool isFromScratch;
  @JsonKey(name: "is_maintained")
  bool isMaintained;
  @JsonKey(name: "is_add_feat")
  bool isAddFeat;
  @JsonKey(name: "is_redesign")
  bool isRedesign;
  @JsonKey(name: "is_handed_over")
  bool isHandedOver;
  Migration? migration;
  List<String> tags;

  Project({
    required this.name,
    required this.imageName,
    required this.description,
    required this.isFromScratch,
    required this.isMaintained,
    required this.isAddFeat,
    required this.isRedesign,
    required this.isHandedOver,
    this.migration,
    required this.tags,
  });

  factory Project.fromJson(Map<String, dynamic> json) =>
      _$ProjectFromJson(json);

  Map<String, dynamic> toJson() => _$ProjectToJson(this);
}
