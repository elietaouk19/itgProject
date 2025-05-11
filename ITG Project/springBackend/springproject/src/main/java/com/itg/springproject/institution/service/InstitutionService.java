package com.itg.springproject.institution.service;

import java.util.List;

import com.itg.springproject.institution.dto.InstitutionDto;
import com.itg.springproject.institution.model.InstitutionModel;

public interface InstitutionService  {
    
    public List<InstitutionModel> getAllInstitutions();

    public InstitutionModel getInstitutionById(Long institutionId);

    public List<InstitutionModel> getActiveInstitutions();


    public void deleteInstitution(Long institutionId);

    public InstitutionModel createOrUpdateInstitution(InstitutionDto institutionDto);

}
