package com.itg.springproject.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.springproject.common.CustomResponse;
import com.itg.springproject.common.ResponseBuilder;
import com.itg.springproject.common.security.JwtUtil;
import com.itg.springproject.login.dto.UserDto;
import com.itg.springproject.login.dto.UserDto.CreateUserGroup;
import com.itg.springproject.login.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<CustomResponse<String>> login(@RequestBody UserDto request) {
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUserName(), request.getUserPassword())
            );

        } catch (AuthenticationException e) {
            e.printStackTrace();
            return ResponseBuilder.notFound("Invalid Credentials");
        }
        final UserDetails userDetails = userService.loadUserByUsername(request.getUserName());
        final String token = jwtUtil.generateToken(userDetails.getUsername());

        return ResponseBuilder.ok("Successfull Login", token);

    }


 @PostMapping("/registerUser")
    public ResponseEntity<CustomResponse<String>> registerUser(@Validated(CreateUserGroup.class) @RequestBody UserDto userDto) {        
        userService.registerUser(userDto);
        return ResponseBuilder.created("User "+userDto.getUserName()+" created", null);

    }



}

