package com.backendparcial.demo.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDate;

public class LibroDTO {
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;

    @NotBlank(message = "El autor es obligatorio")
    private String autor;

    @NotNull(message = "La fecha de escritura es obligatoria")
    private LocalDate fechaDeEscritura;

    @Min(value = 1, message = "El número de edición debe ser al menos 1")
    private int numeroDeEdicion;

    @DecimalMin(value = "0.0", inclusive = false, message = "El precio debe ser mayor que 0")
    private BigDecimal precio;

    @NotBlank(message = "El tipo es obligatorio")
    private String tipo; // Entretenimiento/Pedagógico

    @NotBlank(message = "La fama del escritor es obligatoria")
    private String famaEscritor; // Alta/Media/Baja

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public LocalDate getFechaDeEscritura() {
        return fechaDeEscritura;
    }

    public void setFechaDeEscritura(LocalDate fechaDeEscritura) {
        this.fechaDeEscritura = fechaDeEscritura;
    }

    public int getNumeroDeEdicion() {
        return numeroDeEdicion;
    }

    public void setNumeroDeEdicion(int numeroDeEdicion) {
        this.numeroDeEdicion = numeroDeEdicion;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getFamaEscritor() {
        return famaEscritor;
    }

    public void setFamaEscritor(String famaEscritor) {
        this.famaEscritor = famaEscritor;
    }
}
