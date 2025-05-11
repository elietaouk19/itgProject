package com.itg.springproject.institution.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class InstitutionDto {

    // @Null(groups = CreateInstitutionGroup.class)
    // @NotNull(groups = UpdateInstitutionGroup.class)
    @NotNull
    private Long institutionId;

    @NotNull
    @Digits(integer = 5, fraction = 0)
    private Integer institutionCode;

    @NotNull
    @Size(max = 50)
    private String institutionName;

    @NotNull
    @Min(0)
    @Max(1)
    private Integer institutionStatus;

    
}
