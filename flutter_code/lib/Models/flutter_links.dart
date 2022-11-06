import 'package:json_annotation/json_annotation.dart';

part 'flutter_links.g.dart';

@JsonSerializable()
class FlutterLinks {
  @JsonKey(name: "app_store")
  String appStore;
  @JsonKey(name: "play_store")
  String playStore;

  FlutterLinks({
    required this.appStore,
    required this.playStore,
  });

  factory FlutterLinks.fromJson(Map<String, dynamic> json) =>
      _$FlutterLinksFromJson(json);

  Map<String, dynamic> toJson() => _$FlutterLinksToJson(this);
}
