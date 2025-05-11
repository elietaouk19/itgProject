package com.itg.springproject.institution.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Entity
@Table(name = "institutions")
@Data
public class InstitutionModel {

    @Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "s_institution_id")
	@SequenceGenerator(name = "s_institution_id", sequenceName = "s_institution_id", allocationSize = 1)
    @Column(name = "institution_id", nullable = false,updatable = false,unique = true)
    private Long institutionId;

    @NotNull
    @Digits(integer = 5, fraction = 0)
    @Column(name = "institution_code", nullable = false, length = 5)
    private Integer institutionCode;

    @NotNull
    @Size(max = 50)
    @Column(name = "institution_name", nullable = false, length = 50)
    private String institutionName;

    @NotNull
    @Min(0)
    @Max(1)
    @Column(name = "institution_status", nullable = false)
    private Integer institutionStatus;
}
