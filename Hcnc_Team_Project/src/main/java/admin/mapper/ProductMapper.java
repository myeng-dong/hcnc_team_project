package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("ProductMapper")
public interface ProductMapper {
    List<Map<String,Object>> selectProductListByAdmin(Map<String,Object> p);
    void insertProduct(Map<String,Object> p);
    void insertOption(Map<String,Object> p);
    void insertInventory(Map<String,Object> p);
    void insertProductImage(Map<String,Object> p);
    void updateProductImageMapping(Map<String,Object> p);
    void setMainImage(Map<String,Object> p);
}
