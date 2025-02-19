package co.javeriana.wiki.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.javeriana.wiki.models.Forms;
import co.javeriana.wiki.repositories.FormsInterface;

@Service

public class FormsService {
    @Autowired
    FormsInterface fInterface;
    // forms es el objeto que se esta recogiendo
    public Forms saveForms(Forms formulario){
        return fInterface.save(formulario);
    }
}
