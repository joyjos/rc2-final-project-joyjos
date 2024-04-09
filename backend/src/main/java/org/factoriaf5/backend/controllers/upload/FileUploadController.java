package org.factoriaf5.backend.controllers.upload;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
public class FileUploadController {

    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: El archivo está vacío.");
        }

        try {
            // Generar un nombre único para el archivo
            String fileName = StringUtils.cleanPath(UUID.randomUUID().toString() + "_" + file.getOriginalFilename());

            // Construir la ruta de almacenamiento dentro de la carpeta "static/uploads"
            Path uploadDir = Paths.get("src/main/resources/static/uploads");
            Path filePath = uploadDir.resolve(fileName);

            // Crear los directorios si no existen
            Files.createDirectories(uploadDir);

            // Guardar el archivo en la ruta especificada
            file.transferTo(filePath.toFile());

            // Devolver la URL del archivo guardado
            String fileUrl = "/uploads/" + fileName;
            return ResponseEntity.ok().body("Archivo subido correctamente. URL: " + fileUrl);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al subir el archivo.");
        }
    }
}


