package com.backendparcial.demo.service;

import com.backendparcial.demo.dto.LibroDTO;
import com.backendparcial.demo.entity.Libro;
import com.backendparcial.demo.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LibroService {
    @Autowired
    private LibroRepository libroRepository;

    public List<LibroDTO> getAllLibros() {
        return libroRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public LibroDTO getLibroById(Long id) {
        return libroRepository.findById(id).map(this::convertToDTO).orElse(null);
    }

    public LibroDTO createLibro(LibroDTO libroDTO) {
        Libro libro = new Libro();
        libro.setNombre(libroDTO.getNombre());
        libro.setAutor(libroDTO.getAutor());
        libro.setFechaDeEscritura(libroDTO.getFechaDeEscritura());
        libro.setNumeroDeEdicion(libroDTO.getNumeroDeEdicion());
        libro.setPrecio(libroDTO.getPrecio());
        libro.setTipo(libroDTO.getTipo());
        libro.setFamaEscritor(libroDTO.getFamaEscritor());
        libro = libroRepository.save(libro);
        return convertToDTO(libro);
    }

    public LibroDTO updateLibro(Long id, LibroDTO libroDTO) {
        Libro libro = libroRepository.findById(id).orElse(null);
        if (libro != null) {
            libro.setNombre(libroDTO.getNombre());
            libro.setAutor(libroDTO.getAutor());
            libro.setFechaDeEscritura(libroDTO.getFechaDeEscritura());
            libro.setNumeroDeEdicion(libroDTO.getNumeroDeEdicion());
            libro.setPrecio(libroDTO.getPrecio());
            libro.setTipo(libroDTO.getTipo());
            libro.setFamaEscritor(libroDTO.getFamaEscritor());
            libro = libroRepository.save(libro);
            return convertToDTO(libro);
        }
        return null;
    }

    public void deleteLibro(Long id) {
        libroRepository.deleteById(id);
    }

    private LibroDTO convertToDTO(Libro libro) {
        LibroDTO libroDTO = new LibroDTO();
        libroDTO.setId(libro.getId());
        libroDTO.setNombre(libro.getNombre());
        libroDTO.setAutor(libro.getAutor());
        libroDTO.setFechaDeEscritura(libro.getFechaDeEscritura());
        libroDTO.setNumeroDeEdicion(libro.getNumeroDeEdicion());
        libroDTO.setPrecio(libro.getPrecio());
        libroDTO.setTipo(libro.getTipo());
        libroDTO.setFamaEscritor(libro.getFamaEscritor());
        return libroDTO;
    }
}
