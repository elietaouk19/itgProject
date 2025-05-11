package com.itg.springproject.institution.service.serviceImpl;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itg.springproject.institution.dto.InstitutionDto;
import com.itg.springproject.institution.model.InstitutionModel;
import com.itg.springproject.institution.repository.InstitutionRepo;
import com.itg.springproject.institution.service.InstitutionService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class InstitutionServiceImpl implements InstitutionService{

@Autowired
InstitutionRepo institutionRepo;

    @Override
    public List<InstitutionModel> getAllInstitutions() {
       return institutionRepo.findAll();
    }

    @Override
    public InstitutionModel getInstitutionById(Long institutionId){
       InstitutionModel institution = institutionRepo.findById(institutionId)
        .orElseThrow(() -> new EntityNotFoundException("Institution with id is not found: " + institutionId));
        return institution;
     }

    @Override
    public List<InstitutionModel> getActiveInstitutions() {
       return institutionRepo.findAllByInstitutionStatus(1);
    }
    
    @Override
    public void deleteInstitution(Long institutionId){
        if(institutionRepo.existsById(institutionId)){
            institutionRepo.deleteById(institutionId);
        }else{
            throw new EntityNotFoundException("Institution with id is not found: " + institutionId);
        }

    }

    @Override
    @Transactional
    public InstitutionModel createOrUpdateInstitution(InstitutionDto institutionDto){
        InstitutionModel institution;

        if(institutionDto.getInstitutionId()==0){
            institution=new InstitutionModel();
        }else{
            institution = institutionRepo.findById(institutionDto.getInstitutionId())
            .orElseThrow(() -> new EntityNotFoundException("Institution not found with ID: " + institutionDto.getInstitutionId()));
        }

        BeanUtils.copyProperties(institutionDto, institution,"institutionId");
        institutionRepo.save(institution);
        return institution;
    }



}
