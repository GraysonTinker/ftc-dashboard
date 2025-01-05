import { RootState, useAppDispatch } from "@/store/reducers";
import BaseView, { BaseViewHeading, BaseViewHeadingProps, BaseViewIconButton, BaseViewIcons, BaseViewProps } from "../BaseView";

import { ReactComponent as SaveIcon } from '@/assets/icons/save.svg';
import { ReactComponent as RefreshIcon } from '@/assets/icons/refresh.svg';
import { HardwareConfigState } from "@/store/types";
import { useSelector } from "react-redux";

type HardwareConfigViewProps = BaseViewProps & BaseViewHeadingProps;

function validAndModified(state: HardwareConfigState)

const HardwareConfigView = ({
    id,
    isDraggable = false,
    isUnlocked = false,
}: HardwareConfigViewProps) => {
    const dispatch = useAppDispatch();
  
    const configRoot = useSelector(
      (state: RootState) => state.config.configRoot,
    ) as HardwareConfigState;

    return (
      <BaseView isUnlocked={isUnlocked}>
        <div className="flex">
          <BaseViewHeading isDraggable={isDraggable}>
            Hardware Configuration
          </BaseViewHeading>
          <BaseViewIcons>
            <BaseViewIconButton
              title="Save Changes"
              onClick={() => {
              const configDiff = validAndModified(configRoot);
              if (configDiff != null) {
                dispatch({
                  type: 'SAVE_HARDWARE_CONFIG',
                  configDiff,
                });
              }
              }}
            >
                <SaveIcon className="h-6 w-6" />
            </BaseViewIconButton>
            <BaseViewIconButton
                title="Reload Values"
                onClick={() =>
                  dispatch({
                    type: 'GET_HARDWARE_CONFIG',
                  })
                }
            >
              <RefreshIcon className="h-6 w-6" />
            </BaseViewIconButton>
          </BaseViewIcons>
        </div>
      </BaseView>
    );
}

export default HardwareConfigView;