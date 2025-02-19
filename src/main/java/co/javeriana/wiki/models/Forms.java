package co.javeriana.wiki.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "COMENTARIOS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Forms {
    // Genera una pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String NOMBRE;
    private String APELLIDO;
    private String CORREO;
    private int SEMESTRE;
    private String MENSAJE;


}
