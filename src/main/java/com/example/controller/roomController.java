package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.roomDto;
import com.example.services.roomService;

@RestController
@RequestMapping("/room")
public class roomController {
    @Autowired
    roomService roomService;

    @GetMapping("/info/{id}")
    public roomDto getInfo(@PathVariable String id){
        return roomService.getRoom(id);
    }
    
}
