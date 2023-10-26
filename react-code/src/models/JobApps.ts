import { IosApp } from "./IosApp"
import { CrossPlatformApp } from "./CrossPlatformApp"

export interface JobApps {
    ios?: IosApp[]
    flutter?: CrossPlatformApp[]
    reactNative?: CrossPlatformApp[]
  }