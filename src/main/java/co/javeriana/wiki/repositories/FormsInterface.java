package co.javeriana.wiki.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import co.javeriana.wiki.models.Forms;

public interface FormsInterface extends JpaRepository<Forms, Long> {

}
