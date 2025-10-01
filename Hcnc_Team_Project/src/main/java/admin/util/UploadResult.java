package admin.util;

public class UploadResult {
    private String flaskResponse;
    private String fileName;

    public UploadResult(String flaskResponse, String fileName) {
        this.flaskResponse = flaskResponse;
        this.fileName = fileName;
    }

    public String getFlaskResponse() {
        return flaskResponse;
    }

    public String getFileName() {
        return fileName;
    }
}