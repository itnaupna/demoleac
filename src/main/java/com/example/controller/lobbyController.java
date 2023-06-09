package com.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.roomDto;
import com.example.services.roomService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/lobby")
@Slf4j
public class lobbyController {
    
    @Autowired
    roomService roomService;

    @GetMapping("/list")
    public List<roomDto> getList(){
        // log.info("방목록 호출");
        // System.out.println(roomService.getAll());
        return roomService.getAll();
    }

    @PostMapping("/create")
    public roomDto postCreate(@RequestBody Map<String,Object> data){
        // log.info();
        
        return roomService.createRoom(data.get("name").toString());
    }


}
