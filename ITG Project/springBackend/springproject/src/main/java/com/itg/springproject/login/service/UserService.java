package com.itg.springproject.login.service;

import org.springframework.security.core.userdetails.UserDetails;

import com.itg.springproject.login.dto.UserDto;

public interface UserService {
    
    public UserDetails loadUserByUsername(String username);

    public void registerUser(UserDto userdto);

}
