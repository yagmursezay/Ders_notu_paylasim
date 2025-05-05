package com.dersnotu.service;

import com.dersnotu.entity.Note;
import com.dersnotu.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private FileStorageService fileStorageService;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Optional<Note> getNoteById(Long id) {
        return noteRepository.findById(id);
    }

    public Note saveNote(Note note, MultipartFile file) throws IOException {
        if (file != null && !file.isEmpty()) {
            String fileName = fileStorageService.storeFile(file);
            note.setFileName(fileName);
            note.setFilePath(uploadDir + "/" + fileName);
            note.setFileType(file.getContentType());
            note.setFileSize(file.getSize());
        }
        return noteRepository.save(note);
    }

    public void deleteNote(Long id) throws IOException {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found"));

        if (note.getFileName() != null) {
            fileStorageService.deleteFile(note.getFileName());
        }

        noteRepository.deleteById(id);
    }
}