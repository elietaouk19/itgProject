package com.itg.springproject.login.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    
    @Null(groups = CreateUserGroup.class)
    @NotNull(groups = UpdateUserGroup.class)
    private Long userId;

    @NotNull
    @Email
    // @Pattern(
    // regexp = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
    // message = "Invalid email format")  
    private String userEmail;

    @NotNull
    private String userName;

    @NotNull
    private String userPassword;

    public interface CreateUserGroup {}
    public interface UpdateUserGroup {}
}
