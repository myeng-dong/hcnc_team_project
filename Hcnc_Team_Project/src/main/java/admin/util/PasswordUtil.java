package admin.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

//관리자 비밀번호 암호화 sha-256
public class PasswordUtil {
	
	public static String encryptSHA256(String str)
	{
		String sha="";

		try {
			MessageDigest sh= MessageDigest.getInstance("SHA-256");
			sh.update(str.getBytes());
			byte[] byteData = sh.digest();
			StringBuilder sb=new StringBuilder();
			for (byte byteDatum : byteData) {
				sb.append(Integer.toString((byteDatum & 0xff) + 0x100, 16).substring(1));
			}

			sha=sb.toString();

		} catch (NoSuchAlgorithmException e) {
			System.out.println("암호화 에러-NoSuchAlgorithmException");
			sha=null;
		}
		return sha;
	}
}
