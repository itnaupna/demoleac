package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test")
    public List<String> getTest() {
        List<String> lst = new ArrayList<>();
        lst.add("eong");
        lst.add("eong24567");
        return lst;
    }
    // eong
}
