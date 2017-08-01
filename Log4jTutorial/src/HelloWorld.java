import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;

public class HelloWorld {
    private static final Logger log = LogManager.getRootLogger();

    public static void main(String[] args) {
        log.debug("Debugging Message");
        log.info("Informational message");
        log.warn("Warning Message");
        System.out.println("Akila");
    }
}