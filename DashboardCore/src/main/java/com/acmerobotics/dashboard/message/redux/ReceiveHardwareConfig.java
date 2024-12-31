package com.acmerobotics.dashboard.message.redux;

import com.acmerobotics.dashboard.message.Message;
import com.acmerobotics.dashboard.message.MessageType;

public class ReceiveHardwareConfig extends Message {
    private String hardwareConfigXML;

    public ReceiveHardwareConfig(String hardwareConfigXML){
        super(MessageType.RECEIVE_HARDWARE_CONFIG);

        this.hardwareConfigXML = hardwareConfigXML;
    }
}
