
package com.portfolio.manoelmoreira.Interface;

import com.portfolio.manoelmoreira.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    
    //Traer una lista Persona
    public List<Persona> getPersona();
    
    //Guardar un objeto del tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto que se busac por la id
    public void deletePersona(Long id);
    
    //Buscar una persona por el id
    public Persona findPersona(Long id);
}
