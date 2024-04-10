package org.factoriaf5.backend.controllers.upload;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {
    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Error: El archivo está vacío.";
        }

        try {
            // Obtener el nombre original del archivo
            String fileName = file.getOriginalFilename();
            
            // Definir la ruta donde se guardará el archivo (en este caso en el directorio "uploads" en la raíz del proyecto)
            String filePath = System.getProperty("user.dir") + File.separator + "uploads" + File.separator + fileName;
            
            // Crear el archivo en la ruta especificada
            File dest = new File(filePath);
            
            // Guardar el archivo en el sistema de archivos
            file.transferTo(dest);
            
            return "Archivo " + fileName + " subido correctamente.";
        } catch (IOException e) {
            e.printStackTrace();
            return "Error al subir el archivo.";
        }
    }
}
