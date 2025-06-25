import { IconTypeEnum } from "@/components/ui/UiIcon/enums"

interface CoverConfigInterface {
  CoverStyle: Record<string, string>
  PlayIconStyle: Record<string,string>
  playIconSize: IconTypeEnum
}

export{CoverConfigInterface}