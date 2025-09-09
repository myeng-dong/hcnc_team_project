package exception;

public class ServiceException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 4574000203155339457L;

	public ServiceException(String message) {
        super(message);
    }
}
