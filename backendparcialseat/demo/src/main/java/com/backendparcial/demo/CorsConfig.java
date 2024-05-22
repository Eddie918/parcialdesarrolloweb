package com.backendparcial.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:4200") // Reemplaza con la URL de tu aplicación Angular
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*");
    }
}