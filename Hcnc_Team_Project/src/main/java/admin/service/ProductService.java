package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.ProductMapper;

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    public List<Map<String,Object>> selectProductListByAdmin(Map<String,Object> p) {
        return productMapper.selectProductListByAdmin(p);
    }

    public void insertProduct(Map<String,Object> p) {
        productMapper.insertProduct(p);
    }

    public void insertOption(Map<String,Object> p) {
        productMapper.insertOption(p);
    }

    public void insertInventory(Map<String,Object> p) {
        productMapper.insertInventory(p);
    }

    public void insertProductImage(Map<String,Object> fileInfo) {
        productMapper.insertProductImage(fileInfo);
    }

    public void updateProductImageMapping(Map<String,Object> p) {
        productMapper.updateProductImageMapping(p);
    }

    public void setMainImage(Map<String,Object> p) {
        productMapper.setMainImage(p);
    }
}
