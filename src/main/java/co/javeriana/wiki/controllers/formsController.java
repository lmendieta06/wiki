package co.javeriana.wiki.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import co.javeriana.wiki.models.Forms;
import co.javeriana.wiki.services.FormsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
// folder de template donde esta el contactanos
@RequestMapping("/pages")
public class formsController {

    @Autowired
    private FormsService Fservice;
    // html que lo tiene
    @GetMapping("/contactanos")
    public String Formulario(Model model) { 
        model.addAttribute("formulario", new Forms());
        return "pages/contactanos";
    }
    // no es una vista de templates, sino que se utiliza para guardar lo enviado.
    @PostMapping("/guardarContacto")
    public String guardarFormulario(@ModelAttribute Forms formulario, Model model) {
        Fservice.saveForms(formulario);
        
        return "redirect:/pages/contactanos";
    }
    
}

