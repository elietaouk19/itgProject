package com.itg.springproject.institution.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.springproject.common.CustomResponse;
import com.itg.springproject.common.ResponseBuilder;
import com.itg.springproject.institution.dto.InstitutionDto;
import com.itg.springproject.institution.model.InstitutionModel;
import com.itg.springproject.institution.service.InstitutionService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class InstitutionController {
    
@Autowired
InstitutionService institutionService;

    @GetMapping("/getAllInstitutions")
    public ResponseEntity<CustomResponse<List<InstitutionModel>>> getAllInstitutions() {
        List<InstitutionModel>institutions= institutionService.getAllInstitutions();
    return ResponseBuilder.ok("All institutions fetched", institutions);
    }

    @GetMapping("/getActiveInstitutions")
    public ResponseEntity<CustomResponse<List<InstitutionModel>>> getActiveInstitutions() {
        List<InstitutionModel>activeInstitutions=institutionService.getActiveInstitutions();
        return ResponseBuilder.ok("All active institutions fetched", activeInstitutions);
    }

    @GetMapping("/getInstitutionById/{institutionId}")
    public ResponseEntity<CustomResponse<InstitutionModel>> getInstitutionById(@PathVariable("institutionId") Long institutionId) {
        InstitutionModel institutionModel=institutionService.getInstitutionById(institutionId);
        return ResponseBuilder.ok("Institution with id "+institutionId+" is found", institutionModel);
    }


    @DeleteMapping("/deleteInstitution/{institutionId}")
    public ResponseEntity<CustomResponse<String>> deleteInstitution(@PathVariable("institutionId") Long institutionId) {
        institutionService.deleteInstitution(institutionId);
        return ResponseBuilder.ok("Institution with id "+institutionId+" has been deleted","");
    }

    @PostMapping("/createOrUpdateInstitution")
    public ResponseEntity<CustomResponse<InstitutionModel>> createOrUpdateInstitution(@RequestBody @Valid InstitutionDto institutionDto){

        InstitutionModel institutionModel=institutionService.createOrUpdateInstitution(institutionDto);
        if(institutionDto.getInstitutionId()==0){
            return ResponseBuilder.created("Institution with id "+institutionModel.getInstitutionId()+" has been created",institutionModel);
        }else{
            return ResponseBuilder.ok("Institution with id "+institutionModel.getInstitutionId()+" has been updated",institutionModel);
        }
    }

}
