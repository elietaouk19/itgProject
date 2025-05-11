package com.itg.springproject.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itg.springproject.login.model.UserModel;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Long> {

    UserModel findByUserName(String userName);
    boolean existsByUserName(String name);
    boolean existsByUserEmail(String email);

}
