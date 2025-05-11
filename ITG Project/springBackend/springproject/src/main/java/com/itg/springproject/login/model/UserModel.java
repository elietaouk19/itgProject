package com.itg.springproject.login.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.Email;

import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class UserModel {
    
    @Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "s_user_id")
	@SequenceGenerator(name = "s_user_id", sequenceName = "s_user_id", allocationSize = 1)
    @Column(name = "user_id", nullable = false,updatable = false,unique = true)
    private Long userId;
    
    @NotNull
    @Column(name = "userName", nullable = false,updatable = true,unique = true)
    private String userName;

    @Email
    @NotNull
    @Column(name = "user_email", nullable = false,updatable = true,unique = true)
    private String userEmail;

    @NotNull
    @Column(name = "user_password", nullable = false,updatable = true)
    private String userPassword;

}
