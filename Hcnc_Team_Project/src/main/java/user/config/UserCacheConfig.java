package user.config;

import java.util.Arrays;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableCaching //메모리에 데이터를 미리 적재 spring cach
public class UserCacheConfig {
    
    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        cacheManager.setCaches(Arrays.asList(
            new ConcurrentMapCache("categories"),//카테고리서브카테고리
            new ConcurrentMapCache("subCategories"),
            new ConcurrentMapCache("banners"),//메인도
            new ConcurrentMapCache("newProducts"),//타입별1
            new ConcurrentMapCache("hotProducts"),//타입별2
            new ConcurrentMapCache("recommendProducts"),//타입별3
            new ConcurrentMapCache("newProductsCnt"),//타입별1
            new ConcurrentMapCache("hotProductsCnt"),//타입별2
            new ConcurrentMapCache("recommendProductsCnt")//타입별3
        ));
        return cacheManager;
    }
}