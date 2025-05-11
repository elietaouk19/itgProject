package com.itg.springproject.login.service.serviceImpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.itg.springproject.login.dto.UserDto;
import com.itg.springproject.login.model.UserModel;
import com.itg.springproject.login.repository.UserRepo;
import com.itg.springproject.login.service.UserService;

@Service
public class UserServiceImpl implements UserDetailsService,UserService{

    @Autowired
    UserRepo userRepo;

     @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserModel userModel = userRepo.findByUserName(username);

        if (userModel == null) {
            throw new UsernameNotFoundException("User "+username+" not found");
        }

            return User.builder()
                    .username(userModel.getUserName())
                    .password(userModel.getUserPassword())
                    .roles("USER")
                    .build();

    }

     @Override
     public void registerUser(UserDto userDto) {
        if(userRepo.existsByUserName(userDto.getUserName())){
                throw new ResponseStatusException(HttpStatus.CONFLICT,"The username "+userDto.getUserName()+" is already taken. Please choose a different one.");
        }else if(userRepo.existsByUserEmail(userDto.getUserEmail())){
                throw new ResponseStatusException(HttpStatus.CONFLICT,"The email "+userDto.getUserEmail()+" is already taken. Please choose a different one.");
        }
        UserModel userModel=new UserModel();
        userDto.setUserPassword(new BCryptPasswordEncoder().encode(userDto.getUserPassword()));
        BeanUtils.copyProperties(userDto, userModel,"userId");
        userRepo.save(userModel);

        
    }
    
}
