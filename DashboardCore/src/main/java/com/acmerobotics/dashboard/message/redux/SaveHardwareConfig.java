package com.acmerobotics.dashboard.message.redux;

import com.acmerobotics.dashboard.message.Message;
import com.acmerobotics.dashboard.message.MessageType;

public class SaveHardwareConfig extends Message {
    private String hardwareConfigXML;

    public SaveHardwareConfig(String hardwareConfigXML){
        super(MessageType.SAVE_HARDWARE_CONFIG);

        this.hardwareConfigXML = hardwareConfigXML;
    }

    public String getHardwareConfigXML() {
        return hardwareConfigXML;
    }
}
