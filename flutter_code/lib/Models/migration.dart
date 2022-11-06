import 'package:json_annotation/json_annotation.dart';

part 'migration.g.dart';

@JsonSerializable()
class Migration {
  String from;
  String to;

  Migration({
    required this.from,
    required this.to,
  });

  factory Migration.fromJson(Map<String, dynamic> json) =>
      _$MigrationFromJson(json);

  Map<String, dynamic> toJson() => _$MigrationToJson(this);
}
