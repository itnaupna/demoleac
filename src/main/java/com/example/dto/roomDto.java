package com.example.dto;

import java.util.UUID;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class roomDto {
    String roomId;
    String roomName;


    public static roomDto create(String name){
        roomDto r = new roomDto();
        r.roomId = UUID.randomUUID().toString();
        r.roomName=name;
        return r;
    }
}
