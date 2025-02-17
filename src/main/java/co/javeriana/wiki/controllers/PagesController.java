package co.javeriana.wiki.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PagesController {
    // pagina de inicio
    @GetMapping("/")
    public String index() {
        return "index";
    }
    // team
    @GetMapping("/pages/team")
    public String team(Model model) {
        model.addAttribute("currentPage", "team");
        return "pages/team";
    }
    // arquitectura
    @GetMapping("/pages/arquitectura")
    public String arquitectura(Model model) {
        model.addAttribute("currentPage", "arquitectura");
        return "pages/arquitectura";
    }
    // desarrollo y pruebas
    @GetMapping("/pages/desarrollo")
    public String desarrollo(Model model) {
        model.addAttribute("currentPage", "desarrollo");
        return "pages/desarrolloYPruebas";
    }
    // despliegue
    @GetMapping("/pages/despliegue")
    public String despliegue(Model model) {
        model.addAttribute("currentPage", "despliegue");
        return "pages/despliegue";
    }
    // proyecto
    @GetMapping("/pages/proyecto")
    public String proyecto(Model model) {
        model.addAttribute("currentPage", "proyecto");
        return "pages/proyecto";
    }
    // contactanos
    @GetMapping("/pages/contactanos")
    public String contactanos(Model model) {
        model.addAttribute("currentPage", "contactanos");
        return "pages/contactanos";
    }
}
