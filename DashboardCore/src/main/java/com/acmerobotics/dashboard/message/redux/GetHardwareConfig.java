package com.acmerobotics.dashboard.message.redux;

import com.acmerobotics.dashboard.message.Message;
import com.acmerobotics.dashboard.message.MessageType;

public class GetHardwareConfig extends Message {
    public GetHardwareConfig(){ super(MessageType.GET_HARDWARE_CONFIG); }
}
