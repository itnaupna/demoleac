package com.example.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.dto.roomDto;

import jakarta.annotation.PostConstruct;

@Service
public class roomService {

    private Map<String, roomDto> rooms;
    
    @PostConstruct
    private void init(){
        rooms = new LinkedHashMap<>();
    }

    public List<roomDto> getAll(){
        List<roomDto> res = new ArrayList<>(rooms.values());
        Collections.reverse(res);
        return res;
    }

    public roomDto createRoom(String name){
        roomDto r = roomDto.create(name);
        rooms.put(r.getRoomId(),r);
        return r;
    }

    public roomDto getRoom(String roomId){
        return rooms.get(roomId);
    }
}
