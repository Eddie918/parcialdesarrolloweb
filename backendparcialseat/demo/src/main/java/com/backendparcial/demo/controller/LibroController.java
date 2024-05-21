package com.backendparcial.demo.controller;

import com.backendparcial.demo.dto.LibroDTO;
import com.backendparcial.demo.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/libros")
@Validated
public class LibroController {
    @Autowired
    private LibroService libroService;

    @GetMapping
    public List<LibroDTO> getAllLibros() {
        return libroService.getAllLibros();
    }

    @GetMapping("/{id}")
    public LibroDTO getLibroById(@PathVariable Long id) {
        return libroService.getLibroById(id);
    }

    @PostMapping
    public LibroDTO createLibro(@Valid @RequestBody LibroDTO libroDTO) {
        return libroService.createLibro(libroDTO);
    }

    @PutMapping("/{id}")
    public LibroDTO updateLibro(@PathVariable Long id, @Valid @RequestBody LibroDTO libroDTO) {
        return libroService.updateLibro(id, libroDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteLibro(@PathVariable Long id) {
        libroService.deleteLibro(id);
    }
}
