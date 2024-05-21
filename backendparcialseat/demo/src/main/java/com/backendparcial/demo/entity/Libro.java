package com.backendparcial.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
}
