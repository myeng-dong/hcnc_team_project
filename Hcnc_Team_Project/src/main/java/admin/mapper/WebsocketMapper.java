package admin.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("WebsocketMapper")
public interface WebsocketMapper {

	String selectUserTypeByAdmin(String userId);

}
