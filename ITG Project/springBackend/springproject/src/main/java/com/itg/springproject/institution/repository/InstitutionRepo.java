package com.itg.springproject.institution.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.itg.springproject.institution.model.InstitutionModel;

@Repository
public interface InstitutionRepo extends JpaRepository<InstitutionModel, Long> {
     
    List<InstitutionModel> findAllByInstitutionStatus(Integer institutionStatus);


}
