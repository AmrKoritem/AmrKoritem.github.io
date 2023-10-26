import { BaseApp } from "./BaseApp";

export interface CrossPlatformApp extends BaseApp {
  links: {
    app_store: string;
    play_store: string;
  };
}
